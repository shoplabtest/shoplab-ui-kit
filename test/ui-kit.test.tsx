import { test } from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { ApiError, Badge, CURRENCIES, FormField, PriceTag, Toast, formatMoney } from '../src/index.ts';

test('formatMoney converts minor units', () => {
  assert.equal(formatMoney(1999, 'USD'), '$19.99');
  assert.equal(formatMoney(500, 'EUR', 'de-DE'), '5,00 €');
});

test('formatMoney rejects unknown currencies', () => {
  assert.throws(() => formatMoney(1, 'XXX' as never), RangeError);
});

test('CURRENCIES lists supported codes', () => {
  assert.deepEqual([...CURRENCIES], ['USD', 'EUR', 'GBP']);
});

test('PriceTag shows compareAt only when higher', () => {
  assert.match(renderToStaticMarkup(<PriceTag amount={800} currency="USD" compareAt={1000} />), /<s class="sl-price-tag__was">/);
  assert.doesNotMatch(renderToStaticMarkup(<PriceTag amount={800} currency="USD" compareAt={700} />), /<s /);
});

test('FormField renders error with alert role', () => {
  const html = renderToStaticMarkup(<FormField label="Email" name="email" error="Required"><input id="email" /></FormField>);
  assert.match(html, /role="alert"/);
});

test('Toast dismiss button only with handler', () => {
  assert.doesNotMatch(renderToStaticMarkup(<Toast message="Hi" />), /button/);
  assert.match(renderToStaticMarkup(<Toast message="Hi" onDismiss={() => {}} />), /button/);
});

test('ApiError is catchable by instanceof', () => {
  try { throw new ApiError(404, 'not_found'); } catch (e) {
    assert.ok(e instanceof ApiError);
    assert.equal((e as ApiError).status, 404);
  }
});

test('Badge renders its text with the tone class', () => {
  assert.match(renderToStaticMarkup(<Badge tone="success">New</Badge>), /<span class="sl-badge sl-badge--success">New<\/span>/);
  assert.match(renderToStaticMarkup(<Badge>Plain</Badge>), /sl-badge--neutral/);
});
