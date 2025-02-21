'use client'

import { Hero } from '@/components/Hero'
import { Box } from '@chakra-ui/react'

export default function Page() {
  return (
    <main>
      <Box mt="100px">
        <Hero title="PORTAL WEB" subtitle="CEDROS NORTE" image="/hero-home.jpg" textPosition="left" />
      </Box>
    </main>
  )
}
