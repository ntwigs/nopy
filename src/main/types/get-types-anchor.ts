import { typesSelector } from './types-selector'

export const getTypesAnchor = (): HTMLAnchorElement | undefined => {
  const anchor = document.querySelector<HTMLAnchorElement>(typesSelector)

  if (!anchor) return undefined

  return anchor.cloneNode() as HTMLAnchorElement
}
