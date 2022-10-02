export const hasElement = (selector: string, parent?: HTMLElement) => {
  const element = (parent ? parent : document).querySelector(selector)
  return Boolean(element)
}
