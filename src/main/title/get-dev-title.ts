export const getDevTitle = (element: Element): Element => {
  const titleCopy = element.cloneNode() as HTMLHeadingElement

  titleCopy.textContent = 'Dev Install'

  return titleCopy as Element
}
