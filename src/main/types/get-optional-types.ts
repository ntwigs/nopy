import { type Elements, typeConfig } from '@config'
import { getTypesAnchor } from './get-types-anchor'
import { getTypesPackage } from './get-types-package'
import { withError } from '../../utils/with-error'
import { getElement } from '../element/get-element'

export const getOptionalTypes = ({ text, button }: Elements): HTMLElement[] => {
  const anchor = getTypesAnchor()

  if (!anchor) return []

  const typesPackage = getTypesPackage(anchor)
  const [typesElements, typesElementsError] = withError<HTMLElement[]>(() =>
    getElement(typeConfig, { text, button }, typesPackage)
  )

  if (typesElementsError) throw new Error(typesElementsError.message)

  return typesElements
}
