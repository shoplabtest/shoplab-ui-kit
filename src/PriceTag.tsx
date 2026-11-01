import { Money } from './Money.tsx';
import type { Currency } from './currencies.ts';

export interface PriceTagProps {
  amount: number;
  currency: Currency;
  /** Original price in minor units; when set and higher, shown struck through. */
  wasAmount?: number;
  /** @deprecated Use `wasAmount`. Kept so existing callers keep working. */
  compareAt?: number;
  className?: string;
}

export function PriceTag({ amount, currency, wasAmount, compareAt, className }: PriceTagProps) {
  const was = wasAmount ?? compareAt;
  return (
    <div className={['sl-price-tag', className].filter(Boolean).join(' ')}>
      {was !== undefined && was > amount && (
        <s className="sl-price-tag__was"><Money amount={was} currency={currency} /></s>
      )}
      <Money amount={amount} currency={currency} />
    </div>
  );
}
