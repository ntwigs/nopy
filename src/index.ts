import { getButtons } from './main/button/get-buttons'
import { getCopyButton } from './main/button/get-copy-button'
import { getCopyTitle } from './main/title/get-copy-title'
import { getDevTitle } from './main/title/get-dev-title'
import { appendElements } from './utils/append-elements'
import { getAnimatedElements } from './utils/get-animated-elements'
import { logger } from './utils/logger'
import { withError } from './utils/with-error'

const alternatives = ['yarn add', 'bun install']
const devAlternatives = ['npm i -D', 'yarn add -D', 'bun install -D']

const main = () => {
  const [button, buttonError] = withError<HTMLDivElement>(() => getCopyButton())
  if (buttonError) {
    return logger(buttonError)
  }

  const [buttons, buttonsError] = withError<HTMLDivElement[]>(() =>
    getButtons(button, alternatives)
  )
  if (buttonsError) {
    return logger(buttonsError)
  }

  const [devButtons, devButtonsError] = withError<HTMLDivElement[]>(() =>
    getButtons(button, devAlternatives)
  )
  if (devButtonsError) {
    return logger(devButtonsError)
  }

  const [title, titleError] = withError<HTMLHeadingElement>(() => getCopyTitle())
  if (titleError) {
    return logger(titleError)
  }

  const devTitle = getDevTitle(title)
  const elements = [...buttons, devTitle, ...devButtons]
  const animatedElements = getAnimatedElements(elements)

  appendElements(button, animatedElements)
}

main()
