export function easeOutQuad(t: number): number {
  return 1 - (1 - t) * (1 - t);
}

export function frameValue(from: number, to: number, progress: number): number {
  const eased = easeOutQuad(Math.max(0, Math.min(1, progress)));
  return Math.round(from + (to - from) * eased);
}
