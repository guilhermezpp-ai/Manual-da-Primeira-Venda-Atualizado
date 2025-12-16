import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  fullWidth = false, 
  className = '', 
  href,
  ...props 
}) => {
  const commonClasses = `
    relative group overflow-hidden rounded-lg font-bold uppercase tracking-wider text-black transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-accent/30
    bg-brand-accent hover:bg-brand-accentHover
    px-8 py-5 text-lg sm:text-xl cursor-pointer
    ${fullWidth ? 'w-full flex' : 'inline-flex'} items-center justify-center
    ${className}
  `;

  const content = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2 font-black">
        {children}
        <ArrowRight className="w-6 h-6 animate-pulse" />
      </span>
      {/* Shine effect - Animation defined in global CSS (index.html) */}
      <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[30deg] group-hover:animate-[shine_0.75s_ease-in-out_infinite]" />
    </>
  );

  const handleInternalLink = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (href) {
    const isInternal = href.startsWith('#');
    return (
      <a 
        href={href} 
        className={commonClasses}
        target={isInternal ? undefined : "_blank"}
        rel={isInternal ? undefined : "noopener noreferrer"}
        onClick={isInternal ? (e) => handleInternalLink(e, href) : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={commonClasses}
      {...props}
    >
      {content}
    </button>
  );
};