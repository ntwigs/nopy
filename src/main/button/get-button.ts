import { getAlert } from '../alert/get-alert'
import { getAlertContainer } from '../alert/get-alert-container'

const getPackageName = (button: HTMLElement): string => {
  const [packageName] = button.textContent.split(' ').reverse()
  return packageName
}

const getCodeBlock = (button: HTMLDivElement) => {
  const code = button.querySelector<HTMLElement>('code')
  if (!code) {
    throw new Error('Could not find code block in button')
  }
  return code
}

const getCopyButton = (button: HTMLDivElement) => {
  const copyButton = button.querySelector<HTMLElement>('button')
  if (!copyButton) {
    throw new Error('Could not find copy button in button')
  }
  return copyButton
}

const setSelection = (codeBlock: HTMLElement) => () => {
  const range = document.createRange()
  const selection = window.getSelection()

  range.selectNodeContents(codeBlock)

  selection?.removeAllRanges()
  selection?.addRange(range)
}

const clearSelection = () => {
  window.getSelection()?.removeAllRanges()
}

const copyPackageName = (codeBlock: HTMLElement) => () => {
  const alertContainer = getAlertContainer()
  const alert = getAlert()
  navigator.clipboard.writeText(codeBlock.textContent)
  alertContainer.appendChild(alert)

  const removeAlert = () => {
    alertContainer.removeChild(alert)
  }

  const ALERT_WAIT_IN_MS = 2000
  const timeout = setTimeout(removeAlert, ALERT_WAIT_IN_MS)

  alert.addEventListener('click', () => {
    clearTimeout(timeout)
    removeAlert()
  })
}

export const getButton = (
  button: HTMLDivElement,
  alternative: string,
  packageName?: string
): HTMLElement => {
  const buttonClone = button.cloneNode(true) as HTMLDivElement

  const codeBlock = getCodeBlock(buttonClone)
  const packageNameWithFallback = packageName
    ? packageName
    : getPackageName(codeBlock)
  codeBlock.textContent = `${alternative} ${packageNameWithFallback}`

  const copyButton = getCopyButton(buttonClone)
  copyButton.addEventListener('mouseenter', setSelection(codeBlock))
  copyButton.addEventListener('mouseleave', clearSelection)
  copyButton.addEventListener('click', copyPackageName(codeBlock))
  return buttonClone
}
