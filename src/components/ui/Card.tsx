import type { PropsWithChildren, ReactNode } from 'react';

interface CardProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  extra?: ReactNode;
  className?: string;
}

export function Card({ title, subtitle, extra, children, className }: PropsWithChildren<CardProps>) {
  return (
    <div className={className ? `card ${className}` : 'card'}>
      {(title || subtitle || extra) && (
        <div className="card-header">
          <div className="title">
            {title}
            {subtitle && <span className="card-subtitle">{subtitle}</span>}
          </div>
          {extra}
        </div>
      )}
      {children}
    </div>
  );
}
