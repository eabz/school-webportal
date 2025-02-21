'use client'

import { Hero } from '@/components'
import { Box } from '@chakra-ui/react'

export default function Page() {
  return (
    <main>
      <Box position="relative" mt="100px">
        <Hero title="GENERAL" image="/hero-general.jpg" textPosition="left" />
      </Box>
    </main>
  )
}
