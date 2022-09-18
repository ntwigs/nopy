export const getDevTitle  = (element: Element): Element => {
  const titleCopy = element.cloneNode()

  titleCopy.textContent = "Dev Install"

  return titleCopy as Element
}