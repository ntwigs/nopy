export const appendButtons = (button: Element, buttons: Element[]): void => {
  buttons.forEach((_button) => {
    button.insertAdjacentElement('afterend', _button)
  })
}
