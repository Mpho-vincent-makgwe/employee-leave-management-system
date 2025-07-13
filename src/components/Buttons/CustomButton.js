'use client';

import Link from 'next/link';

const CustomButton = ({
  text,
  to = null, // For links
  onClick = null, // For button actions
  icon = null, // Optional icon
  type = 'button', // Button type (button, submit, reset)
  variant = 'primary', // primary, secondary, outline, ghost, etc.
  size = 'medium', // small, medium, large
  disabled = false,
  className = '',
  newTab = false, // Open link in new tab
}) => {
  // Variant styles
  const variantStyles = {
    primary: 'bg-[#5C4DFF] text-white hover:opacity-90',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border border-[#5C4DFF] text-[#5C4DFF] hover:bg-[#5C4DFF]/10',
    ghost: 'text-[#5C4DFF] hover:bg-[#5C4DFF]/10',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  // Size styles
  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  // Base button classes
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-md font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C4DFF] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

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
        {icon}
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
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default CustomButton;