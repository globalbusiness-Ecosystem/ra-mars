"use client";

import { useEffect, useRef, useState } from "react";
import type { EyewearProduct } from "@/lib/eyewear-data";

interface CameraFaceDetectionProps {
  product: EyewearProduct;
  onBack: () => void;
}

interface FaceLandmarks {
  left_eye: [number, number][];
  right_eye: [number, number][];
  nose: [number, number][];
}

interface FaceDetection {
  landmarks: FaceLandmarks;
}

export function CameraFaceDetection({ product, onBack }: CameraFaceDetectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationIdRef = useRef<number | null>(null);

  const [faceDetected, setFaceDetected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFaceApiReady, setIsFaceApiReady] = useState(false);

  // Load face-api.js models
  useEffect(() => {
    const loadFaceApi = async () => {
      try {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js";
        script.onload = async () => {
          // Load models
          const MODEL_URL = "https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/weights/";

          // Dynamically load models
          try {
            await (window as any).faceapi.nets.faceDetectionNet.loadFromUri(MODEL_URL);
            await (window as any).faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
            setIsFaceApiReady(true);
          } catch (err) {
            console.error("[v0] Failed to load face-api models:", err);
            setError("Face detection models failed to load");
          }
        };
        script.onerror = () => {
          setError("Failed to load face detection library");
        };
        document.body.appendChild(script);

        return () => {
          if (document.body.contains(script)) {
            document.body.removeChild(script);
          }
        };
      } catch (err) {
        console.error("[v0] Error loading face-api:", err);
        setError("Failed to initialize face detection");
      }
    };

    loadFaceApi();
  }, []);

  // Request camera access
  useEffect(() => {
    if (!isFaceApiReady) return;

    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "user",
            width: { ideal: 480 },
            height: { ideal: 640 },
          },
          audio: false,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          streamRef.current = stream;
          setIsLoading(false);

          // Start detection loop
          detectFaces();
        }
      } catch (err) {
        console.error("[v0] Camera access error:", err);
        setError("Unable to access camera. Please grant permissions.");
        setIsLoading(false);
      }
    };

    startCamera();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isFaceApiReady]);

  const detectFaces = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const faceapi = (window as any).faceapi;

    const detectFrame = async () => {
      if (video.readyState !== video.HAVE_ENOUGH_DATA) {
        animationIdRef.current = requestAnimationFrame(detectFrame);
        return;
      }

      try {
        const detections = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks();

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (detections.length > 0) {
          setFaceDetected(true);

          // Draw face detection box
          detections.forEach((detection: any) => {
            const box = detection.detection.box;
            ctx.strokeStyle = "#7C3AED";
            ctx.lineWidth = 2;
            ctx.strokeRect(box.x, box.y, box.width, box.height);

            // Get eye landmarks
            const landmarks = detection.landmarks;
            const leftEye = landmarks.getLeftEye();
            const rightEye = landmarks.getRightEye();

            if (leftEye && rightEye && leftEye.length > 0 && rightEye.length > 0) {
              // Calculate eye positions
              const leftEyeX = leftEye.reduce((sum: number, p: any) => sum + p.x, 0) / leftEye.length;
              const leftEyeY = leftEye.reduce((sum: number, p: any) => sum + p.y, 0) / leftEye.length;

              const rightEyeX = rightEye.reduce((sum: number, p: any) => sum + p.x, 0) / rightEye.length;
              const rightEyeY = rightEye.reduce((sum: number, p: any) => sum + p.y, 0) / rightEye.length;

              const eyeDistance = Math.sqrt(
                Math.pow(rightEyeX - leftEyeX, 2) + Math.pow(rightEyeY - leftEyeY, 2)
              );

              // Draw eye positions for debugging
              ctx.fillStyle = "#F59E0B";
              ctx.beginPath();
              ctx.arc(leftEyeX, leftEyeY, 4, 0, Math.PI * 2);
              ctx.fill();
              ctx.beginPath();
              ctx.arc(rightEyeX, rightEyeY, 4, 0, Math.PI * 2);
              ctx.fill();
            }
          });
        } else {
          setFaceDetected(false);
        }
      } catch (err) {
        console.error("[v0] Face detection error:", err);
      }

      animationIdRef.current = requestAnimationFrame(detectFrame);
    };

    detectFrame();
  };

  const handleClose = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
    }
    onBack();
  };

  return (
    <div className="relative w-full bg-gray-950 rounded-3xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
      {/* Video feed */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Detection canvas overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Eyewear overlay (static positioned) */}
      {faceDetected && (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 pointer-events-none">
          <svg viewBox="0 0 240 60" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-lg">
            <path d="M105 30 Q120 22 135 30" stroke={product.accentColor} strokeWidth="3" fill="none" strokeLinecap="round" />
            <rect x="10" y="12" width="88" height="36" rx="16" fill={product.imageColor} stroke={product.accentColor} strokeWidth="3" fillOpacity="0.7" />
            <rect x="142" y="12" width="88" height="36" rx="16" fill={product.imageColor} stroke={product.accentColor} strokeWidth="3" fillOpacity="0.7" />
            <rect x="14" y="16" width="80" height="28" rx="13" fill={product.accentColor} fillOpacity="0.2" />
            <rect x="146" y="16" width="80" height="28" rx="13" fill={product.accentColor} fillOpacity="0.2" />
            <line x1="10" y1="27" x2="2" y2="38" stroke={product.accentColor} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="230" y1="27" x2="238" y2="38" stroke={product.accentColor} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="20" y1="20" x2="32" y2="28" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
            <line x1="152" y1="20" x2="164" y2="28" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
          </svg>
        </div>
      )}

      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gray-900/80 backdrop-blur-sm">
          <svg className="animate-spin w-10 h-10 text-purple-500" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.2" />
            <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <p className="text-gray-400 text-sm">Initializing camera...</p>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gray-900/95 backdrop-blur-sm">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p className="text-gray-300 text-sm text-center px-4">{error}</p>
          <button
            onClick={handleClose}
            className="mt-2 px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-colors"
          >
            Close
          </button>
        </div>
      )}

      {/* Waiting for face detection guide */}
      {!faceDetected && !isLoading && !error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-32 opacity-40 animate-pulse" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="100" cy="130" rx="75" ry="95" stroke="#7C3AED" strokeWidth="2" fill="none" strokeDasharray="6 3" />
            <ellipse cx="72" cy="105" rx="18" ry="12" stroke="#7C3AED" strokeWidth="1.5" fill="none" />
            <ellipse cx="128" cy="105" rx="18" ry="12" stroke="#7C3AED" strokeWidth="1.5" fill="none" />
            <path d="M85 155 Q100 168 115 155" stroke="#7C3AED" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      )}

      {/* Status badge */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between bg-black/70 rounded-lg px-3 py-2 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: faceDetected ? "#10b981" : "#f59e0b" }}
          />
          <span className="text-white text-xs font-medium">
            {faceDetected ? "Face Detected" : "Awaiting Detection"}
          </span>
        </div>
        <button
          onClick={handleClose}
          className="w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
