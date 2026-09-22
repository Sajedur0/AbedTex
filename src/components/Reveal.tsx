import { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

export default function Reveal({ children, delay = 0, className = '', direction = 'up' }: RevealProps) {
  const { ref, visible } = useReveal(0.12);

  const directionMap = {
    up: 'reveal-up',
    down: 'reveal-down',
    left: 'reveal-left',
    right: 'reveal-right',
    fade: 'reveal-fade',
  };

  return (
    <div
      ref={ref}
      className={`${directionMap[direction]} ${visible ? 'revealed' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
