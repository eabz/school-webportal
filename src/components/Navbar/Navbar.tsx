import { Box, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
  return (
    <HStack
      position="sticky"
      top="0"
      background="blue"
      width="100%"
      height="100px"
      alignContent="center"
      justifyContent="space-between"
      paddingX="20"
    >
      <Box>
        <Image src="/logo.svg" width="200" alt="Colegio Cedros Norte Logotipo" height="60" priority />
      </Box>
      <Box>
        <HStack spaceX="10" color="white" fontSize="20px">
          <Link href="/general">Información General</Link>
          <Link href="/calendarios">Calendarios y actividades</Link>
          <Link href="/recursos">Recursos para profesores</Link>
        </HStack>
      </Box>
    </HStack>
  )
}
