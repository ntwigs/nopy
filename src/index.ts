import { getButtons } from './main/button/get-buttons'
import { getCopyButton } from './main/button/get-copy-button'
import { getCopyTitle } from './main/title/get-copy-title'
import { getDevTitle } from './main/title/get-dev-title'
import { appendElements } from './utils/append-elements'
import { logger } from './utils/logger'
import { withError } from './utils/with-error'

const alternatives = ['yarn add', 'bun install']
const devAlternatives = ['npm i -D', 'yarn add -D', 'bun install -D']

const main = () => {
  const [button, buttonError] = withError<Element>(() => getCopyButton())
  if (buttonError) {
    return logger(buttonError)
  }

  const [buttons, buttonsError] = withError<Element[]>(() =>
    getButtons(button, alternatives)
  )
  if (buttonsError) {
    return logger(buttonsError)
  }

  const [devButtons, devButtonsError] = withError<Element[]>(() =>
    getButtons(button, devAlternatives)
  )
  if (devButtonsError) {
    return logger(devButtonsError)
  }

  const [title, titleError] = withError<Element>(() => getCopyTitle())
  if (titleError) {
    return logger(titleError)
  }

  const devTitle = getDevTitle(title)
  const elements = [...buttons, devTitle, ...devButtons] as HTMLDivElement[]

  const scaleElements = elements.map((element, index) => {
    element.classList.add('scale-in')
    element.style.animationDelay = `${25 * index}ms`
    return element
  })

  appendElements(button, scaleElements)
}

main()
