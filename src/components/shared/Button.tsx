import React from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  onClick,
  children,
  className = "",
  href,
  target,
  rel,
  type = "button",
}: ButtonProps) => {
  const baseClass = `px-6 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border border-transparent bg-violet-600 ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={
          rel || (href.startsWith("http") ? "noopener noreferrer" : undefined)
        }
        className={baseClass}
      >
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={baseClass} type={type}>
      {children}
    </button>
  );
};
