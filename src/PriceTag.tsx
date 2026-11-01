import { Money } from './Money.tsx';
import type { Currency } from './currencies.ts';

export interface PriceTagProps {
  amount: number;
  currency: Currency;
  /** Original price in minor units; when set and higher, shown struck through. */
  compareAt?: number;
  className?: string;
}

export function PriceTag({ amount, currency, compareAt, className }: PriceTagProps) {
  return (
    <div className={['sl-price-tag', className].filter(Boolean).join(' ')}>
      {compareAt !== undefined && compareAt > amount && (
        <s className="sl-price-tag__was"><Money amount={compareAt} currency={currency} /></s>
      )}
      <Money amount={amount} currency={currency} />
    </div>
  );
}
