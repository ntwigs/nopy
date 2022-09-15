const alertContainerSelector = 'ul.c746cc21.list.ma0.pa0.tr.z-999'

export const getAlertContainer = (): Element => {
  const container = document.querySelector(alertContainerSelector)

  if (!container) {
    throw new Error('Could not find alert container')
  }

  return container
}
