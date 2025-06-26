import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
}

const baseStyles = 'inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
const variants = {
  primary: 'bg-[#00855a] text-white hover:bg-[#006e4a]',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
  danger: 'bg-red-600 text-white hover:bg-red-700',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className = '', ...props }, ref) => (
    <button
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    />
  )
);

Button.displayName = 'Button';

export default Button; 