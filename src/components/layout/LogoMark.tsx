export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="10" fill="url(#alpho-logo-gradient)" />
      <path
        d="M12 29 L20 11 L28 29"
        stroke="#FFFFFF"
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15.6 22.5 H24.4" stroke="#A5B4FC" strokeWidth="3.2" strokeLinecap="round" />
      <defs>
        <linearGradient id="alpho-logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4338CA" />
          <stop offset="1" stopColor="#6366F1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
