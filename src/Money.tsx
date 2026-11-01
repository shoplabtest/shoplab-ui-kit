import { formatMoney } from './format-money.ts';
import type { Currency } from './currencies.ts';

export interface MoneyProps {
  amount: number;
  currency: Currency;
  locale?: string;
}

export function Money({ amount, currency, locale }: MoneyProps) {
  return <span className="sl-money">{formatMoney(amount, currency, locale)}</span>;
}
