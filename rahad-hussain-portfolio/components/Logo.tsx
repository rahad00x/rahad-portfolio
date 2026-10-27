// Logo mark: an isometric cube with an R and H on its two front faces.
export default function Logo({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" className="shrink-0">
      <rect x="1" y="1" width="62" height="62" rx="15" fill="#0d0d0d" stroke="rgba(255,255,255,0.22)" />
      <path d="M32 11 51 22v20L32 53 13 42V22z" fill="#161616" stroke="#f4f4f4" strokeWidth="2" strokeLinejoin="round" />
      <path d="M13 22l19 11 19-11M32 33v20" fill="none" stroke="#f4f4f4" strokeWidth="2" strokeLinejoin="round" />
      <path d="M32 11 51 22 32 33 13 22z" fill="#2a2a2a" stroke="#f4f4f4" strokeWidth="2" strokeLinejoin="round" />
      <text x="22.5" y="43" fontSize="11" fontWeight="700" fill="#f4f4f4" textAnchor="middle" fontFamily="system-ui, sans-serif">R</text>
      <text x="41.5" y="43" fontSize="11" fontWeight="700" fill="#f4f4f4" textAnchor="middle" fontFamily="system-ui, sans-serif">H</text>
    </svg>
  );
}
