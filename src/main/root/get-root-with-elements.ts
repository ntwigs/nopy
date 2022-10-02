import { rootSelector } from './root-selector'

export const getRootWithElements = (
  elements: HTMLElement[]
): HTMLDivElement => {
  const root = document.createElement('div')
  elements.forEach((element) => root.appendChild(element))
  root.classList.add(rootSelector.slice(1))
  return root
}
