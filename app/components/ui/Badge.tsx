import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'purple' | 'green' | 'orange';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    purple: 'bg-purple-100 text-purple-800',
    green: 'bg-green-100 text-green-800',
    orange: 'bg-orange-100 text-orange-800'
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
