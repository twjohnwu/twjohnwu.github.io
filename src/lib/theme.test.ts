import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getTheme, setTheme, toggleTheme } from './theme';

describe('theme util', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('returns "light" when nothing stored and prefers light', () => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({ matches: false } as MediaQueryList);
    expect(getTheme()).toBe('light');
  });

  it('returns "dark" when nothing stored and prefers dark', () => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({ matches: true } as MediaQueryList);
    expect(getTheme()).toBe('dark');
  });

  it('returns stored theme over OS preference', () => {
    localStorage.setItem('theme', 'light');
    vi.spyOn(window, 'matchMedia').mockReturnValue({ matches: true } as MediaQueryList);
    expect(getTheme()).toBe('light');
  });

  it('setTheme writes localStorage and toggles class', () => {
    setTheme('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('toggleTheme flips current value', () => {
    setTheme('light');
    toggleTheme();
    expect(getTheme()).toBe('dark');
    toggleTheme();
    expect(getTheme()).toBe('light');
  });
});
