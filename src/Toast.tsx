export interface ToastProps {
  kind?: 'info' | 'success' | 'error';
  message: string;
  onDismiss?: () => void;
}

export function Toast({ kind = 'info', message, onDismiss }: ToastProps) {
  return (
    <div role="status" className={`sl-toast sl-toast--${kind}`}>
      <span>{message}</span>
      {onDismiss && <button type="button" aria-label="Dismiss" onClick={onDismiss}>×</button>}
    </div>
  );
}
