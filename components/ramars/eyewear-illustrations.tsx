// Brand-specific eyewear SVG illustrations (200x80px each)

export function RayBanWayfarerSVG() {
  return (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Left lens - thick black trapezoid */}
      <polygon
        points="20,20 55,18 60,62 18,62"
        fill="#1a1a1a"
        stroke="#000000"
        strokeWidth="3"
      />
      {/* Left lens tint */}
      <polygon
        points="24,25 52,23 56,58 22,58"
        fill="#1a1a2e"
        fillOpacity="0.3"
      />
      {/* Left lens shine */}
      <line x1="28" y1="30" x2="38" y2="35" stroke="white" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />

      {/* Bridge - thick black */}
      <rect x="60" y="38" width="80" height="8" rx="2" fill="#000000" stroke="#000000" strokeWidth="2" />
      {/* Bridge highlight */}
      <line x1="65" y1="39" x2="135" y2="39" stroke="white" strokeWidth="0.8" strokeOpacity="0.3" strokeLinecap="round" />

      {/* Right lens - thick black trapezoid */}
      <polygon
        points="140,18 175,20 182,62 145,62"
        fill="#1a1a1a"
        stroke="#000000"
        strokeWidth="3"
      />
      {/* Right lens tint */}
      <polygon
        points="145,23 172,25 178,58 148,58"
        fill="#1a1a2e"
        fillOpacity="0.3"
      />
      {/* Right lens shine */}
      <line x1="162" y1="30" x2="172" y2="35" stroke="white" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />

      {/* Left temple - bold thick arm */}
      <line x1="18" y1="45" x2="0" y2="55" stroke="#000000" strokeWidth="5" strokeLinecap="round" />
      {/* Right temple - bold thick arm */}
      <line x1="182" y1="45" x2="200" y2="55" stroke="#000000" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function GucciGG0061SSVG() {
  return (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Left lens - thin gold oval */}
      <ellipse cx="40" cy="40" rx="25" ry="20" fill="none" stroke="#D4AF37" strokeWidth="2.5" />
      {/* Left lens tint */}
      <ellipse cx="40" cy="40" rx="22" ry="17" fill="#D4AF37" fillOpacity="0.15" />
      {/* Left lens shine */}
      <ellipse cx="32" cy="32" rx="6" ry="4" fill="white" fillOpacity="0.6" />

      {/* Double bridge - left side */}
      <line x1="65" y1="36" x2="85" y2="36" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
      <line x1="65" y1="44" x2="85" y2="44" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />

      {/* Right lens - thin gold oval */}
      <ellipse cx="160" cy="40" rx="25" ry="20" fill="none" stroke="#D4AF37" strokeWidth="2.5" />
      {/* Right lens tint */}
      <ellipse cx="160" cy="40" rx="22" ry="17" fill="#D4AF37" fillOpacity="0.15" />
      {/* Right lens shine */}
      <ellipse cx="168" cy="32" rx="6" ry="4" fill="white" fillOpacity="0.6" />

      {/* Left temple - thin metal */}
      <line x1="15" y1="38" x2="0" y2="50" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
      {/* Right temple - thin metal */}
      <line x1="185" y1="38" x2="200" y2="50" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function OakleyHolbrookSVG() {
  return (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Left lens - dark wraparound sport */}
      <path
        d="M15,35 L40,20 L60,25 L65,55 L40,60 Z"
        fill="#1a1a1a"
        stroke="#333333"
        strokeWidth="3"
      />
      {/* Left lens tint */}
      <path
        d="M20,38 L40,28 L58,32 L62,52 L42,56 Z"
        fill="#ef4444"
        fillOpacity="0.2"
      />

      {/* Bridge - thick O-Matter */}
      <rect x="65" y="35" width="70" height="12" rx="3" fill="#1a1a1a" stroke="#333333" strokeWidth="2.5" />

      {/* Right lens - dark wraparound sport */}
      <path
        d="M135,20 L160,35 L165,60 L140,65 L115,55 Z"
        fill="#1a1a1a"
        stroke="#333333"
        strokeWidth="3"
      />
      {/* Right lens tint */}
      <path
        d="M142,28 L158,38 L162,56 L138,60 L120,52 Z"
        fill="#ef4444"
        fillOpacity="0.2"
      />

      {/* Left temple - thick O-Matter */}
      <line x1="15" y1="40" x2="0" y2="55" stroke="#333333" strokeWidth="6" strokeLinecap="round" />
      {/* Right temple - thick O-Matter */}
      <line x1="185" y1="40" x2="200" y2="55" stroke="#333333" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export function PradaSPR68ZSVG() {
  return (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Left lens - wide cat-eye black acetate */}
      <path
        d="M15,45 Q20,20 45,18 L50,62 Q40,65 20,50 Z"
        fill="#0a0a0a"
        stroke="#2a2a2a"
        strokeWidth="3"
      />
      {/* Left lens tint */}
      <path
        d="M18,45 Q22,28 42,26 L47,58 Q38,60 22,50 Z"
        fill="#a855f7"
        fillOpacity="0.18"
      />
      {/* Left upswept corner detail */}
      <line x1="45" y1="18" x2="52" y2="12" stroke="#2a2a2a" strokeWidth="1.5" strokeLinecap="round" />

      {/* Bridge */}
      <line x1="50" y1="40" x2="150" y2="40" stroke="#2a2a2a" strokeWidth="2.5" strokeLinecap="round" />

      {/* Right lens - wide cat-eye black acetate */}
      <path
        d="M155,18 Q180,20 185,45 L150,50 Q160,65 150,62 Z"
        fill="#0a0a0a"
        stroke="#2a2a2a"
        strokeWidth="3"
      />
      {/* Right lens tint */}
      <path
        d="M158,26 Q178,28 182,45 L152,50 Q162,60 152,58 Z"
        fill="#a855f7"
        fillOpacity="0.18"
      />
      {/* Right upswept corner detail */}
      <line x1="155" y1="18" x2="148" y2="12" stroke="#2a2a2a" strokeWidth="1.5" strokeLinecap="round" />

      {/* Left temple */}
      <line x1="15" y1="42" x2="0" y2="52" stroke="#2a2a2a" strokeWidth="3" strokeLinecap="round" />
      {/* Right temple */}
      <line x1="185" y1="42" x2="200" y2="52" stroke="#2a2a2a" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function MauiJimSVG() {
  return (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Left lens - large silver aviator */}
      <polygon
        points="25,28 45,20 60,42 55,60 35,62 15,45"
        fill="none"
        stroke="#C0C0C0"
        strokeWidth="3"
      />
      {/* Left lens tint */}
      <polygon
        points="28,32 42,25 56,42 52,56 35,58 18,44"
        fill="#0ea5e9"
        fillOpacity="0.15"
      />

      {/* Double bar bridge - top */}
      <line x1="60" y1="32" x2="140" y2="32" stroke="#C0C0C0" strokeWidth="2.5" strokeLinecap="round" />
      {/* Double bar bridge - bottom */}
      <line x1="60" y1="48" x2="140" y2="48" stroke="#C0C0C0" strokeWidth="2.5" strokeLinecap="round" />

      {/* Right lens - large silver aviator */}
      <polygon
        points="155,20 175,28 185,45 165,62 145,60 140,42"
        fill="none"
        stroke="#C0C0C0"
        strokeWidth="3"
      />
      {/* Right lens tint */}
      <polygon
        points="158,25 172,32 182,44 162,56 147,58 142,42"
        fill="#0ea5e9"
        fillOpacity="0.15"
      />

      {/* Left temple */}
      <line x1="15" y1="45" x2="0" y2="60" stroke="#C0C0C0" strokeWidth="3" strokeLinecap="round" />
      {/* Right temple */}
      <line x1="185" y1="45" x2="200" y2="60" stroke="#C0C0C0" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function TomFordSVG() {
  return (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Left lens - slim rectangular tortoise */}
      <rect x="12" y="28" width="40" height="24" rx="4" fill="#3d2817" stroke="#5d3d1f" strokeWidth="2.5" />
      {/* Left lens tint */}
      <rect x="15" y="31" width="34" height="18" rx="3" fill="#d97706" fillOpacity="0.15" />
      {/* Left lens shine */}
      <line x1="18" y1="32" x2="28" y2="32" stroke="white" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />

      {/* Bridge */}
      <line x1="52" y1="40" x2="148" y2="40" stroke="#5d3d1f" strokeWidth="2" strokeLinecap="round" />

      {/* Right lens - slim rectangular tortoise */}
      <rect x="148" y="28" width="40" height="24" rx="4" fill="#3d2817" stroke="#5d3d1f" strokeWidth="2.5" />
      {/* Right lens tint */}
      <rect x="151" y="31" width="34" height="18" rx="3" fill="#d97706" fillOpacity="0.15" />
      {/* Right lens shine */}
      <line x1="172" y1="32" x2="182" y2="32" stroke="white" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />

      {/* T-logo on left temple */}
      <text x="8" y="48" fontSize="6" fontWeight="bold" fill="#5d3d1f">T</text>

      {/* Left temple */}
      <line x1="12" y1="40" x2="0" y2="52" stroke="#5d3d1f" strokeWidth="2.5" strokeLinecap="round" />
      {/* Right temple */}
      <line x1="188" y1="40" x2="200" y2="52" stroke="#5d3d1f" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function PersolfoldingSVG() {
  return (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Left lens - round black acetate */}
      <circle cx="40" cy="40" r="22" fill="#0a0a0a" stroke="#1a1a1a" strokeWidth="2.5" />
      {/* Left lens tint */}
      <circle cx="40" cy="40" r="19" fill="#b45309" fillOpacity="0.12" />
      {/* Left lens shine */}
      <circle cx="32" cy="32" r="4" fill="white" fillOpacity="0.5" />

      {/* Arrow hinge detail - left side */}
      <path d="M55,35 L60,40 L55,45" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Bridge */}
      <line x1="62" y1="40" x2="138" y2="40" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />

      {/* Arrow hinge detail - right side */}
      <path d="M145,35 L140,40 L145,45" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Right lens - round black acetate */}
      <circle cx="160" cy="40" r="22" fill="#0a0a0a" stroke="#1a1a1a" strokeWidth="2.5" />
      {/* Right lens tint */}
      <circle cx="160" cy="40" r="19" fill="#b45309" fillOpacity="0.12" />
      {/* Right lens shine */}
      <circle cx="168" cy="32" r="4" fill="white" fillOpacity="0.5" />

      {/* Left temple */}
      <line x1="22" y1="52" x2="5" y2="68" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      {/* Right temple */}
      <line x1="178" y1="52" x2="195" y2="68" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function NikeVisionSVG() {
  return (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Left lens - grey sport wrap */}
      <path
        d="M18,35 L35,22 L55,28 L58,52 L40,58 Z"
        fill="#4a5568"
        stroke="#6b7280"
        strokeWidth="2.5"
      />
      {/* Left lens tint */}
      <path
        d="M22,37 L35,28 L52,33 L54,48 L40,54 Z"
        fill="#22c55e"
        fillOpacity="0.12"
      />
      {/* Vented lens cutouts - left */}
      <circle cx="32" cy="35" r="3" fill="none" stroke="#6b7280" strokeWidth="1" opacity="0.6" />
      <circle cx="42" cy="32" r="3" fill="none" stroke="#6b7280" strokeWidth="1" opacity="0.6" />
      <circle cx="48" cy="42" r="3" fill="none" stroke="#6b7280" strokeWidth="1" opacity="0.6" />

      {/* Bridge */}
      <rect x="58" y="36" width="84" height="10" rx="2" fill="#4a5568" stroke="#6b7280" strokeWidth="2" />

      {/* Right lens - grey sport wrap */}
      <path
        d="M142,22 L162,28 L182,35 L180,52 L160,58 L145,52 Z"
        fill="#4a5568"
        stroke="#6b7280"
        strokeWidth="2.5"
      />
      {/* Right lens tint */}
      <path
        d="M148,28 L165,33 L178,37 L176,48 L158,54 L152,48 Z"
        fill="#22c55e"
        fillOpacity="0.12"
      />
      {/* Vented lens cutouts - right */}
      <circle cx="168" cy="35" r="3" fill="none" stroke="#6b7280" strokeWidth="1" opacity="0.6" />
      <circle cx="158" cy="32" r="3" fill="none" stroke="#6b7280" strokeWidth="1" opacity="0.6" />
      <circle cx="152" cy="42" r="3" fill="none" stroke="#6b7280" strokeWidth="1" opacity="0.6" />

      {/* Left temple */}
      <line x1="18" y1="42" x2="0" y2="55" stroke="#6b7280" strokeWidth="3" strokeLinecap="round" />
      {/* Right temple */}
      <line x1="182" y1="42" x2="200" y2="55" stroke="#6b7280" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function LacosteL3651SSVG() {
  return (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Left lens - green acetate rectangle */}
      <rect x="12" y="26" width="42" height="28" rx="3" fill="#166534" stroke="#16a34a" strokeWidth="2.5" />
      {/* Left lens tint */}
      <rect x="16" y="30" width="34" height="20" rx="2" fill="#16a34a" fillOpacity="0.15" />
      {/* Crocodile detail on left temple area */}
      <path d="M18,28 Q22,24 26,28" fill="none" stroke="#16a34a" strokeWidth="1" strokeLinecap="round" />

      {/* Bridge */}
      <rect x="54" y="38" width="92" height="6" rx="1" fill="#166534" stroke="#16a34a" strokeWidth="1.5" />

      {/* Right lens - green acetate rectangle */}
      <rect x="146" y="26" width="42" height="28" rx="3" fill="#166534" stroke="#16a34a" strokeWidth="2.5" />
      {/* Right lens tint */}
      <rect x="150" y="30" width="34" height="20" rx="2" fill="#16a34a" fillOpacity="0.15" />
      {/* Crocodile detail on right temple area */}
      <path d="M182,28 Q178,24 174,28" fill="none" stroke="#16a34a" strokeWidth="1" strokeLinecap="round" />

      {/* Left temple with crocodile */}
      <line x1="12" y1="38" x2="0" y2="50" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
      {/* Crocodile on temple */}
      <text x="2" y="54" fontSize="7" fontWeight="bold" fill="#16a34a">🐊</text>

      {/* Right temple */}
      <line x1="188" y1="38" x2="200" y2="50" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function SilhouetteTitanSVG() {
  return (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Left lens - ultra-thin rimless oval */}
      <ellipse cx="35" cy="40" rx="20" ry="18" fill="none" stroke="#818cf8" strokeWidth="1.5" />
      {/* Left lens tint */}
      <ellipse cx="35" cy="40" rx="18" ry="16" fill="#6366f1" fillOpacity="0.1" />
      {/* Left lens shine */}
      <ellipse cx="28" cy="33" rx="5" ry="3" fill="white" fillOpacity="0.5" />

      {/* Ultra-thin bridge */}
      <line x1="55" y1="40" x2="145" y2="40" stroke="#818cf8" strokeWidth="1" strokeLinecap="round" />

      {/* Right lens - ultra-thin rimless oval */}
      <ellipse cx="165" cy="40" rx="20" ry="18" fill="none" stroke="#818cf8" strokeWidth="1.5" />
      {/* Right lens tint */}
      <ellipse cx="165" cy="40" rx="18" ry="16" fill="#6366f1" fillOpacity="0.1" />
      {/* Right lens shine */}
      <ellipse cx="172" cy="33" rx="5" ry="3" fill="white" fillOpacity="0.5" />

      {/* Titanium temples - ultra-thin */}
      <line x1="15" y1="38" x2="0" y2="48" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="185" y1="38" x2="200" y2="48" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />

      {/* Titanium temple hinges */}
      <circle cx="15" cy="38" r="1.5" fill="#818cf8" />
      <circle cx="185" cy="38" r="1.5" fill="#818cf8" />
    </svg>
  );
}

// Export mapping function
export function getEyewearIllustration(productId: string) {
  const illustrationMap: Record<string, () => JSX.Element> = {
    "1": RayBanWayfarerSVG,
    "2": GucciGG0061SSVG,
    "3": OakleyHolbrookSVG,
    "4": PradaSPR68ZSVG,
    "5": MauiJimSVG,
    "6": TomFordSVG,
    "7": NikeVisionSVG,
    "8": PersolfoldingSVG,
    "9": LacosteL3651SSVG,
    "10": SilhouetteTitanSVG,
  };

  const Illustration = illustrationMap[productId];
  return Illustration ? <Illustration /> : null;
}
