import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const baseStyles = 'block w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#00855a] focus:border-[#00855a] transition-colors disabled:opacity-50';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...props }, ref) => (
    <input ref={ref} className={`${baseStyles} ${className}`} {...props} />
  )
);

Input.displayName = 'Input';

export default Input; 