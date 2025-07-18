'use client';

import Link from 'next/link';

const CustomButton = ({
  text,
  to = null,
  onClick = null,
  icon = null,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
  newTab = false,
}) => {
  // Variant styles
  const variantStyles = {
    primary: 'bg-[#5C4DFF] text-white hover:opacity-90',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border border-[#5C4DFF] text-[#5C4DFF] hover:bg-[#5C4DFF]/10',
    ghost: 'text-[#5C4DFF] hover:bg-[#5C4DFF]/10',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  // Size styles - now responsive with mobile-first approach
  const sizeStyles = {
    small: 'px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm',
    medium: 'px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base',
    large: 'px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg',
  };

  // Base button classes with responsive adjustments
  const baseClasses = `
    inline-flex items-center justify-center gap-1 sm:gap-2 
    rounded-md font-medium transition-all 
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C4DFF] 
    focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
    whitespace-nowrap
  `;

  // Combine all classes
  const buttonClasses = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // If 'to' prop is provided, render as Link
  if (to) {
    return (
      <Link
        href={to}
        target={newTab ? '_blank' : '_self'}
        rel={newTab ? 'noopener noreferrer' : ''}
        className={buttonClasses}
      >
        {icon && <span className="text-base">{icon}</span>}
        <span>{text}</span>
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {icon && <span className="text-base">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default CustomButton;