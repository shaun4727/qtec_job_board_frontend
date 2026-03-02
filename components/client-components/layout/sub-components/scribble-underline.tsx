export function ScribbleUnderline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M2 14C20 8 60 2 120 8C180 14 220 6 238 10"
        stroke="oklch(0.68 0.18 245)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M5 17C30 10 70 5 125 11C175 16 215 9 236 13"
        stroke="oklch(0.68 0.18 245)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M8 12C40 6 80 3 130 7C170 11 210 4 234 8"
        stroke="oklch(0.68 0.18 245)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
