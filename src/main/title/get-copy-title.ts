const titleSelector =
  '#top > div.fdbf4038.w-third-l.mt3.w-100.ph3.ph4-m.pv3.pv0-l > h3'
export const getCopyTitle = () => {
  const title = document.querySelector<HTMLHeadingElement>(titleSelector)

  if (!title) {
    throw new Error('Could not find title')
  }

  return title
}
