const npmRegex = /npmjs.com\/package\/.*/
export const withPackageCheck = (fn: CallableFunction, url?: string) => {
  const isPackage = url ? npmRegex.test(url) : false
  if (isPackage) {
    fn()
  }
}
