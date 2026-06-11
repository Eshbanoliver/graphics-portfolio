import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

// Professional, official brand-standard GitHub icon
export const Github: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

// Professional, official brand-standard LinkedIn filled icon
export const Linkedin: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"/>
  </svg>
);

// Professional, official brand-standard Instagram filled icon
export const Instagram: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

// Professional, official brand-standard YouTube filled play icon with cutout
export const Youtube: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.519 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.519 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 8.432l6.273 3.568-6.273 3.568V8.432z"
    />
  </svg>
);

// Professional, official brand-standard WhatsApp filled icon with cutout
export const Whatsapp: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.004 2c-5.51 0-9.993 4.483-9.993 9.997 0 1.908.537 3.69 1.468 5.215L2 22l5.004-1.42a9.92 9.92 0 0 0 5 1.347c5.51 0 9.996-4.487 9.996-10.001C22 6.483 17.514 2 12.004 2zm5.723 13.916c-.22.617-1.285 1.207-1.772 1.25-.45.04-1.026.06-2.922-.71-2.42-.98-3.978-3.427-4.1-3.587-.121-.16-1.02-1.325-1.02-2.528 0-1.2.62-1.79.842-2.032.22-.24.48-.3.64-.3.16 0 .32.002.46.008.146.006.342-.056.536.406.2.476.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.254.316-.363.424-.12.12-.246.252-.106.492.14.24.62.99 1.33 1.62a7.6 7.6 0 0 0 1.92 1.19.64.64 0 0 0 .48-.06c.13-.14.56-.65.71-.87.15-.22.3-.18.5-.1.2.08 1.27.6 1.49.71.22.11.37.16.42.25.05.09.05.52-.17 1.137z"
    />
  </svg>
);

// Professional, official brand-style Adobe Photoshop icon
export const AdobePhotoshop: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="4.5" fill="#001C3A" stroke="#00A3FF" strokeWidth="1.5" />
    <text
      x="50%"
      y="52%"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="800"
      fontSize="10"
      fill="#00A3FF"
      textAnchor="middle"
      dominantBaseline="middle"
      letterSpacing="-0.02em"
    >
      Ps
    </text>
  </svg>
);

// Professional, official brand-style Adobe Illustrator icon
export const AdobeIllustrator: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="4.5" fill="#261300" stroke="#FF9A00" strokeWidth="1.5" />
    <text
      x="50%"
      y="52%"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="800"
      fontSize="10"
      fill="#FF9A00"
      textAnchor="middle"
      dominantBaseline="middle"
      letterSpacing="-0.02em"
    >
      Ai
    </text>
  </svg>
);

// Professional, official brand-style Adobe Premiere Pro icon
export const AdobePremiere: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="4.5" fill="#14002E" stroke="#EA77FF" strokeWidth="1.5" />
    <text
      x="50%"
      y="52%"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="800"
      fontSize="10"
      fill="#EA77FF"
      textAnchor="middle"
      dominantBaseline="middle"
      letterSpacing="-0.02em"
    >
      Pr
    </text>
  </svg>
);

// Professional, official brand-style Adobe After Effects icon
export const AdobeAfterEffects: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="4.5" fill="#1A002C" stroke="#D39CFF" strokeWidth="1.5" />
    <text
      x="50%"
      y="52%"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="800"
      fontSize="10"
      fill="#D39CFF"
      textAnchor="middle"
      dominantBaseline="middle"
      letterSpacing="-0.02em"
    >
      Ae
    </text>
  </svg>
);

// Professional, official brand-style Canva logo icon
export const Canva: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <linearGradient id="canva-grad-logo" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00C4CC" />
        <stop offset="100%" stopColor="#7D2AE8" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="url(#canva-grad-logo)" />
    <path
      d="M15.5 15.5c-.8.8-2 1.2-3.5 1.2-3 0-5-2-5-4.7s2-4.7 5-4.7c1.5 0 2.7.4 3.5 1.2.4.4.4.9.1 1.2-.3.3-.8.3-1.1-.1-.6-.6-1.5-.9-2.5-.9-2 0-3.2 1.4-3.2 3.3s1.2 3.3 3.2 3.3c1 0 1.9-.3 2.5-.9.3-.4.8-.4 1.1-.1.3.3.3.8-.1 1.1z"
      fill="white"
    />
  </svg>
);
