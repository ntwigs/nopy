const getWrapper = (): HTMLDivElement => {
  const wrapper = document.createElement('div')
  const wrapperClassList = [
    'ee9e731a',
    'pa3',
    'ph5-ns',
    'bb',
    'b--black-10',
    'tl',
    'pointer',
    'z-999',
    'w-100',
    'flex',
    'flex-row',
    'justify-between',
    'd76ab310',
  ]
  wrapper.classList.add(...wrapperClassList)
  return wrapper
}

const getPlacement = (): HTMLDivElement => {
  const placement = document.createElement('div')
  placement.style.display = 'flex'
  return placement
}

const getMessage = (): HTMLParagraphElement => {
  const message = document.createElement('p')
  message.classList.add('ma0')
  message.textContent = '✔ Copied to clipboard!'
  return message
}

const getCloseButton = (): HTMLParagraphElement => {
  const close = document.createElement('p')
  const closeClassList = ['_545224b8', 'ma0', 'f3', 'fw6']
  close.classList.add(...closeClassList)
  close.setAttribute('role', 'button')
  close.setAttribute('aria-label', 'Close notification')
  close.textContent = '×'
  return close
}

export const getAlert = (): HTMLDivElement => {
  const wrapper = getWrapper()
  const placement = getPlacement()
  const message = getMessage()
  const close = getCloseButton()

  placement.appendChild(message)
  wrapper.appendChild(placement)
  wrapper.appendChild(close)

  return wrapper
}
