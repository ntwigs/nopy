import { appendButtons } from './main/button/append-buttons'
import { getButtons } from './main/button/get-buttons'
import { getCopyButton } from './main/button/get-copy-button'
import { getCopyTitle } from './main/title/get-copy-title'
import { getDevTitle } from './main/title/get-dev-title'
import { logger } from './utils/logger'
import { withError } from './utils/with-error'

const alternatives = ['bun install', 'yarn add', 'npm i']
const devAlternatives = ['bun install -D', 'yarn add -D', 'npm i -D']

const main = () => {
  const [button, buttonError] = withError<Element>(() => getCopyButton())
  if (buttonError) {
    return logger(buttonError)
  }

  const [buttons, buttonsError] = withError<Element[]>(() => getButtons(button, alternatives))
  if (buttonsError) {
    return logger(buttonsError)
  }

  const [devButtons, devButtonsError] = withError<Element[]>(() => getButtons(button, devAlternatives))
  if (devButtonsError) {
    return logger(devButtonsError)
  }

  const [title, titleError] = withError<Element>(() => getCopyTitle())
  if (titleError) {
    return logger(titleError)
  }

  const devTitle =  getDevTitle(title)

  appendButtons(button, [...devButtons, devTitle, ...buttons])
  button.remove()
}

main()
