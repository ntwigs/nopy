import { config } from './config'
import { getExistingButton } from './main/button/get-existing-button'
import { getElement } from './main/element/get-element'
import { getCopyText } from './main/text/get-copy-text'
import { appendElements } from './utils/append-elements'
import { getAnimatedElements } from './utils/get-animated-elements'
import { logger } from './utils/logger'
import { withError } from './utils/with-error'

const main = () => {
  const [button, buttonError] = withError<HTMLDivElement>(getExistingButton)
  if (buttonError) {
    return logger(buttonError)
  }

  const [text, textError] = withError<HTMLHeadingElement>(getCopyText)
  if (textError) {
    return logger(textError)
  }

  const [elements, elementsError] = withError<HTMLElement[]>(() =>
    getElement(config, { text, button })
  )
  if (elementsError) {
    return logger(elementsError)
  }

  const animatedElements = getAnimatedElements(elements)
  appendElements(button, animatedElements)
}

main()
