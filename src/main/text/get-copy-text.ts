import { textSelector } from './text-selector'

export const getCopyText = (): HTMLHeadingElement => {
  const text = document.querySelector<HTMLHeadingElement>(textSelector)

  if (!text) {
    throw new Error('Could not find title')
  }

  return text.cloneNode() as HTMLHeadingElement
}
