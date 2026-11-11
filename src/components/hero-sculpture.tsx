export default function HeroSculpture() {
  return (
    <svg className="hero-sculpture" viewBox="0 0 900 740" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ribbon-body" x1="220" y1="100" x2="690" y2="610" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F1FFB0" />
          <stop offset=".24" stopColor="#D7FF3F" />
          <stop offset=".48" stopColor="#92B62A" />
          <stop offset=".68" stopColor="#E9FF8B" />
          <stop offset="1" stopColor="#D7FF3F" />
        </linearGradient>
        <linearGradient id="ribbon-edge" x1="200" y1="100" x2="690" y2="600" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F7FFC8" /><stop offset=".45" stopColor="#BCD544" /><stop offset="1" stopColor="#405817" />
        </linearGradient>
        <linearGradient id="ribbon-fold" x1="400" y1="280" x2="600" y2="470" gradientUnits="userSpaceOnUse">
          <stop stopColor="#769521" /><stop offset=".42" stopColor="#D7FF3F" /><stop offset="1" stopColor="#F1FFAB" />
        </linearGradient>
        <filter id="ribbon-shadow" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="18" dy="30" stdDeviation="20" floodColor="#071345" floodOpacity=".25" /></filter>
      </defs>
      <g transform="rotate(-22 450 370)" filter="url(#ribbon-shadow)">
        <path d="M450 130 C240 70 130 270 250 410 L475 620 C600 735 825 580 687 420 L450 130Z" stroke="#132D9F" strokeWidth="100" transform="translate(14 20)" />
        <path d="M450 130 C240 70 130 270 250 410 L475 620 C600 735 825 580 687 420 L450 130Z" stroke="url(#ribbon-edge)" strokeWidth="104" />
        <path d="M450 130 C240 70 130 270 250 410 L475 620 C600 735 825 580 687 420 L450 130Z" stroke="url(#ribbon-body)" strokeWidth="92" />
        <path d="M450 130 L687 420" stroke="url(#ribbon-fold)" strokeWidth="92" />
        <path d="M424 91 C241 44 105 266 216 440" stroke="#F5FFD2" strokeOpacity=".65" strokeWidth="2" />
        <path d="M721 393 C877 589 611 784 442 656" stroke="#EDFFA1" strokeOpacity=".55" strokeWidth="2" />
      </g>
    </svg>
  );
}
