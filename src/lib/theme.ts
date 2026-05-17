export type Theme = 'light' | 'dark';

export function getTheme(): Theme {
  const stored = localStorage.getItem('theme') as Theme | null;
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function setTheme(theme: Theme): void {
  localStorage.setItem('theme', theme);
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

export function toggleTheme(): void {
  setTheme(getTheme() === 'dark' ? 'light' : 'dark');
}
