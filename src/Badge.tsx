export interface BadgeProps {
  tone?: 'neutral' | 'success' | 'warning';
  children: string;
}

/** Small label, for example "New" or "Low stock". */
export function Badge({ tone = 'neutral', children }: BadgeProps) {
  return <span className={`sl-badge sl-badge--${tone}`}>{children}</span>;
}
