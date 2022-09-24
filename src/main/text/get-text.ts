export const getText = (
  element: HTMLHeadingElement,
  value: string
): HTMLHeadingElement => {
  const text = element.cloneNode() as HTMLHeadingElement
  text.textContent = value
  return text
}
