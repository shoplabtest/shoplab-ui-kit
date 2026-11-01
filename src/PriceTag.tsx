import { Money } from './Money.tsx';
import type { Currency } from './currencies.ts';

export interface PriceTagProps {
  price: number;
  currency: Currency;
  /** Original price in minor units; when set and higher, shown struck through. */
  compareAt?: number;
  className?: string;
}

export function PriceTag({ price, currency, compareAt, className }: PriceTagProps) {
  return (
    <div className={['sl-price-tag', className].filter(Boolean).join(' ')}>
      {compareAt !== undefined && compareAt > price && (
        <s className="sl-price-tag__was"><Money amount={compareAt} currency={currency} /></s>
      )}
      <Money amount={price} currency={currency} />
    </div>
  );
}
