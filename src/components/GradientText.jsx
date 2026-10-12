import React from 'react';

export default function GradientText({ 
  children, 
  as: Component = 'span', 
  type = 'theme', // 'theme', 'subtle', 'strong'
  animated = false,
  className = '',
  ...props 
}) {
  const baseClass = 'text-gradient-base';
  const typeClass = `text-gradient-${type}`;
  const animatedClass = animated ? 'text-gradient-animated' : '';
  
  return (
    <Component 
      className={`${baseClass} ${typeClass} ${animatedClass} ${className}`.trim()} 
      {...props}
    >
      {children}
    </Component>
  );
}
