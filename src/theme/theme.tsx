import { createSystem, defaultConfig, defineConfig, defineTokens } from '@chakra-ui/react'

const tokens = defineTokens({
  colors: {
    blue: { value: '#0C68E9' }
  },
  fonts: {
    body: { value: 'Nunito, sans-serif' }
  }
})

const config = defineConfig({
  theme: {
    tokens
  }
})

export const system = createSystem(config, defaultConfig)
