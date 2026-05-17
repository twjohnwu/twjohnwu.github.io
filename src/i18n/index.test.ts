import { describe, it, expect } from 'vitest';
import { t, getLocaleFromUrl } from './index';

describe('i18n', () => {
  it('returns zh-TW string by default', () => {
    expect(t('zh-TW', 'nav.about')).toBe('關於');
  });
  it('returns english string', () => {
    expect(t('en', 'cta.viewCase')).toBe('View case study');
  });
  it('returns key when missing', () => {
    expect(t('en', 'nonexistent.key')).toBe('nonexistent.key');
  });
  it('detects en locale from /en/ path', () => {
    expect(getLocaleFromUrl(new URL('https://x/en/'))).toBe('en');
  });
  it('detects en locale from /en/case/foo path', () => {
    expect(getLocaleFromUrl(new URL('https://x/en/case/foo'))).toBe('en');
  });
  it('falls back to zh-TW for /', () => {
    expect(getLocaleFromUrl(new URL('https://x/'))).toBe('zh-TW');
  });
});
