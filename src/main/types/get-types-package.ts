const TYPE_PREFIX = '@types/'

export const getTypesPackage = (anchor?: HTMLAnchorElement): string => {
  if (!anchor) return ''

  const [, type] = anchor.href.split(TYPE_PREFIX)

  return `${TYPE_PREFIX}${type}`
}
