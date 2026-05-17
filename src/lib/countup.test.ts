import { describe, it, expect } from 'vitest';
import { easeOutQuad, frameValue } from './countup';

describe('countup', () => {
  it('easeOutQuad(0) is 0', () => {
    expect(easeOutQuad(0)).toBeCloseTo(0);
  });
  it('easeOutQuad(1) is 1', () => {
    expect(easeOutQuad(1)).toBeCloseTo(1);
  });
  it('easeOutQuad(0.5) > 0.5 (decelerates)', () => {
    expect(easeOutQuad(0.5)).toBeGreaterThan(0.5);
  });
  it('frameValue interpolates from 0 to target', () => {
    expect(frameValue(0, 100, 0)).toBe(0);
    expect(frameValue(0, 100, 1)).toBe(100);
  });
  it('frameValue rounds to integer', () => {
    expect(Number.isInteger(frameValue(0, 113576, 0.37))).toBe(true);
  });
});
