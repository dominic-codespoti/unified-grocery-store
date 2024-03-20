// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')

/** @type {import('expo/metro-config').MetroConfig} */
let config = getDefaultConfig(__dirname, {
  isCSSEnabled: false,
})

config.resolver.assetExts.push('db');
config.resolver.sourceExts.push('sql');

// 2. Enable Tamagui
const { withTamagui } = require('@tamagui/metro-plugin')
module.exports = withTamagui(config, {
  components: ['tamagui'],
  config: './tamagui.config.ts',
})
