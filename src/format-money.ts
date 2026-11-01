import { CURRENCIES, type Currency } from './currencies.ts';

/** Format an amount in minor units (cents) as a localized price string. */
export function formatMoney(amount: number, currency: Currency, locale = 'en-US'): string {
  if (!CURRENCIES.includes(currency)) throw new RangeError(`Unsupported currency ${currency}`);
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount / 100);
}
