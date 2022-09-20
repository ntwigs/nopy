const ANIMATION_DELAY_IN_MS = 25

export const getAnimatedElements = (elements: HTMLElement[]): Element[] =>
  elements.map((element, index) => {
    element.classList.add('scale-in')
    element.style.animationDelay = `${ANIMATION_DELAY_IN_MS * index}ms`
    return element
  })
