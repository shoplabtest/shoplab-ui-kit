import type { ReactNode } from 'react';

export interface FormFieldProps {
  label: string;
  name: string;
  error?: string;
  children: ReactNode;
}

export function FormField({ label, name, error, children }: FormFieldProps) {
  return (
    <div className="sl-field">
      <label htmlFor={name}>{label}</label>
      {children}
      {error && <p role="alert" className="sl-field__error">{error}</p>}
    </div>
  );
}
