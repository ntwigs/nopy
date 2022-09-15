const buttonSelector =
  '.lh-copy.truncate.ph0.mb3.black-80.b5be2af6.f6.flex.flex-row'

export const getCopyButton = (): Element => {
  const button = document.querySelector(buttonSelector)

  if (!button) {
    throw new Error('Could not find button')
  }

  return button
}
