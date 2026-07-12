export function renderInlineCode(text: string): string {
  return text.replace(/`([^`]+)`/g, '<code>$1</code>')
}
