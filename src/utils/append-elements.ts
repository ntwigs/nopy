export const appendElements = (button: Element, elements: Element[]): void => {
  elements.forEach((element, index, buttons) => {
    index === 0
      ? button.insertAdjacentElement('afterend', element)
      : buttons[index - 1].insertAdjacentElement('afterend', element)
  })
}
