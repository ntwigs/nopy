export const withError = <Result>(
  fn: CallableFunction
): [Result, null] | [null, Error] => {
  try {
    const result = fn() as Result
    return [result, null]
  } catch (e: unknown) {
    return [null, e as Error]
  }
}