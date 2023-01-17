import { domHasLoaded } from './utils/dom-has-loaded'
import { config, typeConfig } from './config'
import { getExistingButton } from './main/button/get-existing-button'
import { getElement } from './main/element/get-element'
import { getCopyText } from './main/text/get-copy-text'
import { getAnimatedElements } from './utils/get-animated-elements'
import { logger } from './utils/logger'
import { withError } from './utils/with-error'
import { getRootWithElements } from './main/root/get-root-with-elements'
import { removeRoot } from './main/root/remove-root'
import { appendElements } from './utils/append-elements'
import { withPackageCheck } from './utils/with-package-check'
import { hasElement } from './utils/has-element'
import { PATH_CHANGE } from './main/events/path-change'
import { buttonSelector } from './main/button/button-selector'
import { rootSelector } from './main/root/root-selector'
import { getTypesAnchor } from './main/types/get-types-anchor'
import { getTypesPackage } from './main/types/get-types-package'
import { getTypesElement } from './main/element/get-types-element'

const nopy = async () => {
  if (!hasElement(buttonSelector)) {
    await waitForContentChange
  }

  if (hasElement(rootSelector)) {
    removeRoot()
  }

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

  const anchor = getTypesAnchor()
  const typesPackage = getTypesPackage(anchor)
  const typesElements = getTypesElement(
    typeConfig,
    { text, button },
    typesPackage
  )

  const animatedElements = getAnimatedElements([...elements, ...typesElements])
  const root = getRootWithElements(animatedElements)
  appendElements(button, [root])
}

const waitForContentChange = new Promise<void>((resolve) => {
  const observer = new MutationObserver(([mutation], observer) => {
    const hasButton = hasElement(buttonSelector, mutation.target as HTMLElement)
    if (hasButton) {
      resolve()
      observer.disconnect()
    }
  })

  observer.observe(document.body, { subtree: true, childList: true })
})

domHasLoaded.then(() => {
  chrome.runtime.onMessage.addListener((request) => {
    if (request.message === PATH_CHANGE) {
      withPackageCheck(
        hasElement(rootSelector) ? () => waitForContentChange.then(nopy) : nopy,
        window.location.href
      )
    }
  })
})
