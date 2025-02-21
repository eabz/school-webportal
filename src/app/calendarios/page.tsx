'use client'

import { Hero } from '@/components'
import { Box } from '@chakra-ui/react'

export default function Page() {
  return (
    <main>
      <Box mt="100px">
        <Hero subtitle="CALENDARIO Y ACTIVIDADES" image="/hero-home.jpg" textPosition="left" />
      </Box>
    </main>
  )
}
