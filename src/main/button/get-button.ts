import { getAlert } from '../alert/get-alert'
import { getAlertContainer } from '../alert/get-alert-container'

const CODE_POSITION = 1
const getPackageName = (button: Element | Node): string => {
  const buttonText = button.childNodes[CODE_POSITION].textContent

  if (!buttonText) {
    throw new Error('Could not find button text')
  }

  const [packageName] = buttonText.split(' ').reverse()
  return packageName
}

const getButtonSpan = (button: Node): HTMLSpanElement => {
  const span = button.childNodes[CODE_POSITION].firstChild

  if (!span) {
    throw new Error('Could not get button span')
  }

  return span as HTMLSpanElement
}

const getButtonText = (alternative: string, packageName: string): string => {
  return `${alternative} ${packageName}`
}

const setTextContent = (
  span: Node,
  alternative: string,
  packageName: string,
  button: HTMLDivElement
) => {
  span.textContent = getButtonText(alternative, packageName)
  return button
}

const ALERT_WAIT_IN_MS = 2000

const addCopyOnClick = (
  button: Node,
  alternative: string,
  packageName: string
) => {
  button.addEventListener('click', () => {
    const alertContainer = getAlertContainer()
    const alert = getAlert()
    const text = getButtonText(alternative, packageName)
    navigator.clipboard.writeText(text)
    alertContainer.appendChild(alert)

    const removeAlert = () => {
      alertContainer.removeChild(alert)
    }

    const timeout = setTimeout(removeAlert, ALERT_WAIT_IN_MS)

    alert.addEventListener('click', () => {
      clearTimeout(timeout)
      removeAlert()
    })
  })
}

export const getButton = (
  button: HTMLDivElement,
  alternative: string,
  packageName?: string
): HTMLElement => {
  const _packageName = packageName ? packageName : getPackageName(button)
  const buttonClone = button.cloneNode(true) as HTMLDivElement
  const buttonSpan = getButtonSpan(buttonClone)
  addCopyOnClick(buttonClone, alternative, _packageName)
  return setTextContent(buttonSpan, alternative, _packageName, buttonClone)
}
