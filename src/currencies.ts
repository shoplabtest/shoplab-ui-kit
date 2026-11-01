export const CURRENCIES = ['USD', 'EUR', 'GBP'] as const;
export type Currency = (typeof CURRENCIES)[number];
export const SHOP_CURRENCY: Currency = 'USD';
