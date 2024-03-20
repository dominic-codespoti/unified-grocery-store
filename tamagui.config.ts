import { config as configBase } from '@tamagui/config'
import { theme } from './src/utils/theme';
import { createTamagui } from 'tamagui'

const newConfigBase = {
  ...configBase,
  themes: {
    ...configBase.themes,
    light: {
      ...configBase.themes.light,
      ...theme.light
    },
    dark: {
      ...configBase.themes.dark,
      ...theme.dark
    }
  },
};

export const config = createTamagui(newConfigBase)

export default config

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
