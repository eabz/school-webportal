'use client'

import { Hero } from '@/components'
import { Box } from '@chakra-ui/react'

export default function Page() {
  return (
    <main>
      <Box mt="100px">
        <Hero title="CALENDARIOS" image="/hero-calendar.jpg" textPosition="left" />
      </Box>
    </main>
  )
}
