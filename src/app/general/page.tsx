'use client'

import { Hero } from '@/components'
import { Box } from '@chakra-ui/react'

export default function Page() {
  return (
    <main>
      <Box position="relative" mt="100px">
        <Hero subtitle="INFORMACIÓN GENERAL" image="/hero-home.jpg" textPosition="left" />
      </Box>
    </main>
  )
}
