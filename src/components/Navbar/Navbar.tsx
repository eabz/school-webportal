'use client'

import { useMobile } from '@/hooks'
import {
  Box,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  HStack,
  IconButton,
  Stack,
  StackSeparator,
  Text,
  VStack,
  useBreakpointValue
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { CloseIcon, MenuIcon } from '../Icons'

const MenuItems = [
  { name: 'Información General', path: '/general' },
  { name: 'Calendarios y actividades', path: '/calendarios' },
  { name: 'Recursos para profesores', path: '/recursos' }
]

interface IMenuItem {
  name: string
  path: string
  active: boolean
}

const MenuItem = ({ name, path, active }: IMenuItem) => {
  return (
    <Link href={path}>
      <HStack
        pt={3}
        pb={2}
        px={4}
        width="full"
        spaceX={3}
        background={active ? 'white' : 'none'}
        color={active ? 'blue' : 'white'}
        rounded="full"
        _hover={{ background: 'white', color: 'blue' }}
      >
        <Text fontWeight="bold" fontSize="lg">
          {name}
        </Text>
      </HStack>
    </Link>
  )
}

export function Navbar() {
  const pathname = usePathname()

  const value = useBreakpointValue({ base: '10', lg: '20' })

  const [open, setOpen] = useState(false)

  const { mobile } = useMobile()

  return (
    <>
      <DrawerRoot open={mobile ? open : false} size="full" placement="start">
        <DrawerBackdrop />
        <DrawerContent background="blue">
          <DrawerCloseTrigger />
          <DrawerHeader>
            <DrawerTitle justifyContent="center">
              <HStack justifyContent="center">
                <Stack position="absolute" top="2" right="2" color="white">
                  <IconButton onClick={() => setOpen(!open)} variant="surface" size="xs" rounded="full">
                    <CloseIcon />
                  </IconButton>
                </Stack>
              </HStack>
            </DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <VStack separator={<StackSeparator />}>
              {MenuItems.map((item, i) => (
                <MenuItem key={i} name={item.name} path={item.path} active={item.path === pathname} />
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </DrawerRoot>

      <HStack
        position="absolute"
        top="0"
        background="blue"
        width="100%"
        height="100px"
        alignContent="center"
        justifyContent="space-between"
        paddingX={value}
      >
        <Box hideFrom="lg" color="white">
          <IconButton variant="surface" size="xs" hideFrom="lg" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Box>
          <Link href="/">
            <Image src="/logo.svg" width="200" alt="Colegio Cedros Norte Logotipo" height="60" priority />
          </Link>
        </Box>
        <Box hideBelow="lg">
          <HStack color="white" fontSize="18px">
            {MenuItems.map((item, i) => (
              <MenuItem key={i} name={item.name} path={item.path} active={item.path === pathname} />
            ))}
          </HStack>
        </Box>
      </HStack>
    </>
  )
}
