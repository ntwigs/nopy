import { buttonSelector } from './button-selector'

export const getExistingButton = (): HTMLDivElement => {
  const button = document.querySelector<HTMLDivElement>(buttonSelector)

  if (!button) {
    throw new Error('Could not find button')
  }

  return button
}
