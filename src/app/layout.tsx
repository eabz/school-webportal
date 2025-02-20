import { Navbar } from '@/components'
import { ThemeProvider } from '@/providers'
import { Box } from '@chakra-ui/react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const gillSans = localFont({
  src: './fonts/gill-sans.otf',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Portal Web Cedros Norte',
  description: 'Portal web con información útil del Colegio Cedros Norte',
  openGraph: {
    title: 'Portal Web Cedros Norte',
    description: 'Portal web con información útil del Colegio Cedros Norte',
    url: 'https://portal.cedrosnorte.edu.mx/',
    images: [
      {
        url: 'https://school-webportal.pages.dev/banner.jpg',
        width: 1920,
        height: 1080,
        alt: 'og portal web banner'
      }
    ],
    siteName: 'Portal Web Cedros Norte',
    locale: 'es_MX',
    type: 'website'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${gillSans.className} antialiased`}>
      <body>
        <ThemeProvider>
          <Box h="full" position="absolute" top="0" width="full">
            <Navbar />
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  )
}
