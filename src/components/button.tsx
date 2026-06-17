import React from "react";

type Variant = "primary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-ink text-bg border-2 border-ink",
  ghost: "bg-yellow text-ink border-2 border-ink",
};

const Button: React.FC<{
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  title?: string;
  onClick?: () => void;
}> = ({ children, href, variant = "primary", title, onClick }) => {
  const className = `group inline-flex items-center justify-center gap-2 min-h-[44px] px-5 mt-6 text-sm font-semibold tracking-tight shadow-[4px_4px_0_0_#0a0a0a] transition-all duration-150 ease-out hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#0a0a0a] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none ${variantClasses[variant]}`;

  const content = (
    <>
      <span>{children}</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden
        className="transition-transform duration-150 ease-out group-hover:translate-x-0.5"
      >
        <path
          d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );

  if (onClick) {
    return (
      <button title={title} className={className} onClick={onClick}>
        {content}
      </button>
    );
  }
  return (
    <a
      href={href}
      role="button"
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={className}
    >
      {content}
    </a>
  );
};

export default Button;
