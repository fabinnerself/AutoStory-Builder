interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  imageSrc?: string;
  ariaLabel?: string;
  fullWidth?: boolean;
}

export function Button({ variant, children, onClick, className = '', imageSrc, ariaLabel, fullWidth = false }: ButtonProps) {
  const baseStyles = "transition-all duration-200 cursor-pointer";
  
  const variantStyles = {
    primary: `bg-[#041f59] text-white rounded-[15px] px-6 py-3 hover:opacity-90 font-['Julius_Sans_One:Regular',sans-serif] text-[18px] md:text-[24px] ${fullWidth ? 'w-full' : ''}`,
    secondary: `bg-[#d9d9d9] text-orange-500 rounded-[15px] px-6 py-3 hover:opacity-90 font-['Julius_Sans_One:Regular',sans-serif] text-[18px] md:text-[24px] ${fullWidth ? 'w-full' : ''}`,
    tertiary: "hover:opacity-80 hover:scale-105"
  };

  if (variant === 'tertiary' && imageSrc) {
    return (
      <button
        onClick={onClick}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        aria-label={ariaLabel}
      >
        <img src={imageSrc} alt={ariaLabel || "Social media"} className="w-full h-full object-contain" />
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}