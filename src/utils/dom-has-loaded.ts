const hasLoaded = (): boolean =>
  document.readyState === 'interactive' || document.readyState === 'complete'

const waitForDomContent = (resolve: () => void): void => {
  document.addEventListener('DOMContentLoaded', () => resolve(), {
    capture: true,
    once: true,
    passive: true,
  })
}

export const domHasLoaded = new Promise<void>((resolve) =>
  hasLoaded() ? resolve() : waitForDomContent(resolve)
)
