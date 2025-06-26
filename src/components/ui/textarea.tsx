import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const baseStyles = 'block w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#00855a] focus:border-[#00855a] transition-colors disabled:opacity-50';

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', ...props }, ref) => (
    <textarea ref={ref} className={`${baseStyles} ${className}`} {...props} />
  )
);

Textarea.displayName = 'Textarea';

export default Textarea; 