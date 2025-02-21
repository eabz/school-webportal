'use client'

import { Box, Flex, Text } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import Image from 'next/image'

interface IHeroProps {
  image: string
  textPosition: 'left' | 'right'
  title?: string
  subtitle?: string
}

export function Hero({ image, textPosition, title, subtitle }: IHeroProps) {
  const slideDown = keyframes`
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  `

  return (
    <Box position="relative" width="100%" height="400px">
      <Image src={image} alt="Hero Banner" fill style={{ objectFit: 'cover' }} />
      <Flex
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        align="center"
        justify={textPosition === 'left' ? 'flex-start' : 'flex-end'}
        px={8}
        bg="rgba(0, 0, 0, 0.4)"
      >
        <Box
          textAlign={textPosition}
          animation={`${slideDown} 0.8s ease-out`}
          ml={textPosition === 'left' ? { base: 4, md: 8 } : undefined}
          mr={textPosition === 'right' ? { base: 4, md: 8 } : undefined}
        >
          {title && (
            <Text fontFamily="Gill Sans" fontSize={{ base: '5xl', md: '6xl' }} fontWeight="bold" color="white" mb={2}>
              {title}
            </Text>
          )}
          {subtitle && (
            <Text fontFamily="Gill Sans" fontSize={{ base: '3xl', md: '4xl' }} color="white">
              {subtitle}
            </Text>
          )}
        </Box>
      </Flex>
    </Box>
  )
}
