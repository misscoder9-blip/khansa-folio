import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`rounded-2xl overflow-hidden ${
        hover ? 'transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
