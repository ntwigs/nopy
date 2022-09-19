export const getAnimatedElements = (elements: HTMLDivElement[]) =>
  elements.map((element, index) => {
    element.classList.add('scale-in')
    element.style.animationDelay = `${25 * index}ms`
    return element
  })
