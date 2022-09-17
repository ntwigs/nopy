import { appendButtons } from './main/button/append-buttons'
import { getButtons } from './main/button/get-buttons'
import { getCopyButton } from './main/button/get-copy-button'
import { logger } from './utils/logger'
import { withError } from './utils/with-error'

const main = () => {
  const [button, buttonError] = withError<Element>(() => getCopyButton())
  if (buttonError) {
    return logger(buttonError)
  }

  const [buttons, buttonsError] = withError<Element[]>(() => getButtons(button))
  if (buttonsError) {
    return logger(buttonsError)
  }

  appendButtons(button, buttons)
  button.remove()
}

main()
