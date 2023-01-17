export type Elements = {
  text: HTMLHeadingElement
  button: HTMLDivElement
}

type Config = {
  element: keyof Elements
  value: string
}

export type Configs = Config[]

export const config: Configs = [
  {
    element: 'button',
    value: 'yarn add',
  },
  {
    element: 'button',
    value: 'bun install',
  },
  {
    element: 'button',
    value: 'pnpm add',
  },
  {
    element: 'text',
    value: 'Dev install',
  },
  {
    element: 'button',
    value: 'npm i -D',
  },
  {
    element: 'button',
    value: 'yarn add -D',
  },
  {
    element: 'button',
    value: 'bun install -D',
  },
  {
    element: 'button',
    value: 'pnpm add -D',
  },
]

export const typeConfig: Configs = [
  {
    element: 'text',
    value: 'Types install',
  },
  {
    element: 'button',
    value: 'npm i -D',
  },
  {
    element: 'button',
    value: 'yarn add -D',
  },
  {
    element: 'button',
    value: 'bun install -D',
  },
  {
    element: 'button',
    value: 'pnpm add -D',
  },
]

export const isButton = (config: Config): boolean => {
  return config.element === 'button'
}

export const isText = (config: Config): boolean => {
  return config.element === 'text'
}
