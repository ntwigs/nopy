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

const getButtonSpan = (button: Node): ChildNode => {
  const span = button.childNodes[CODE_POSITION].firstChild

  if (!span) {
    throw new Error('Could not get button span')
  }

  return span
}

const getButtonText = (alternative: string, packageName: string): string => {
  return `${alternative} ${packageName}`
}

const setTextContent = (
  span: Node,
  alternative: string,
  packageName: string,
  button: Node
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

export const getButtons = (button: HTMLDivElement, alternatives: string[]): HTMLDivElement[] => {
  const packageName = getPackageName(button)
  return alternatives.map((alternative) => {
    const buttonClone = button.cloneNode(true)
    const buttonSpan = getButtonSpan(buttonClone)
    addCopyOnClick(buttonClone, alternative, packageName)
    return setTextContent(buttonSpan, alternative, packageName, buttonClone)
  }) as HTMLDivElement[]
}
