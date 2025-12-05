'use client';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'red-accent' | 'hover';
}

export function Card({ children, className = '', variant = 'default' }: CardProps) {
  const variants = {
    default: 'bg-white rounded-lg p-6 border border-gray-200 shadow-sm',
    'red-accent': 'bg-white rounded-lg p-6 border border-gray-200 shadow-sm border-l-4 border-l-red-600',
    'hover': 'bg-white rounded-lg p-6 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-red-600'
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
}

export function Button({ children, className = '', variant = 'primary', href }: ButtonProps) {
  const variants = {
    primary: 'bg-red-600 text-white hover:bg-red-700',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    outline: 'border-2 border-red-600 text-red-600 hover:bg-red-50'
  };

  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-block';
  const finalClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={finalClassName}>
        {children}
      </a>
    );
  }

  return (
    <button className={finalClassName}>
      {children}
    </button>
  );
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  sectionId?: number;
  showDivider?: boolean;
}

export function Section({ children, className = '', title, subtitle, sectionId, showDivider = true }: SectionProps) {
  return (
    <>
      <section 
        className={`py-16 px-4 md:px-8 lg:px-12 ${className}`}
        data-section={sectionId}
      >
        <div className="max-w-7xl mx-auto">
          {title && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
              {subtitle && <p className="text-gray-600 text-lg mt-4">{subtitle}</p>}
            </div>
          )}
          {children}
        </div>
      </section>
      {showDivider && <div className="section-divider"></div>}
    </>
  );
}

interface MetricProps {
  value: string | number;
  label: string;
  unit?: string;
}

export function Metric({ value, label, unit }: MetricProps) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-red-600 mb-2">
        {value}{unit && <span className="text-2xl">{unit}</span>}
      </div>
      <div className="text-gray-600 text-sm font-medium">{label}</div>
    </div>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'red' | 'gray' | 'green';
}

export function Badge({ children, variant = 'red' }: BadgeProps) {
  const variants = {
    red: 'bg-red-600 text-white',
    gray: 'bg-gray-200 text-gray-800',
    green: 'bg-green-100 text-green-800'
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}
