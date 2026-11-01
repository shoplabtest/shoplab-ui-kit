import { formatMoney } from './format-money.ts';
import type { Currency } from './currencies.ts';

export interface MoneyProps {
  value: number;
  currency: Currency;
  locale?: string;
}

export function Money({ value, currency, locale }: MoneyProps) {
  return <span className="sl-money">{formatMoney(value, currency, locale)}</span>;
}
