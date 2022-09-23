export const getDevTitle = (
  titleElement: HTMLHeadingElement
): HTMLHeadingElement => {
  titleElement.textContent = 'Dev Install'
  return titleElement
}
