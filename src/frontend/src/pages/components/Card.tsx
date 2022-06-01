import { Box, BoxProps } from '@chakra-ui/react'
import * as React from 'react'

const Card = (props: BoxProps) => (
  <Box
    maxWidth="1xl"
    mx="auto"
    p={{ base: '3', md: '8' }}
    rounded={{ base: 'lg' }}
    shadow={{ base: 'base' }}
    {...props}
  />
)

export default Card;