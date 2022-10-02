import { rootSelector } from './root-selector'

export const removeRoot = () => {
  const root = document.querySelector(rootSelector) as HTMLElement
  root.remove()
}
