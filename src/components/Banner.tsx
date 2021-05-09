import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex w='100%' mt='4'>
      <Image position='relative' w='100%' src='/Background.svg' />
      <Box position= 'absolute' w='50%' padding='20' boxSizing='border-box'>
        <Text color='#F5F8FA' fontSize='36px' fontWeight='bold' >5 Continentes, infinitas possibilidades.</Text>
        <Text color='#DADADA' fontSize='20px'>Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
      </Box>
      <Image src='/Airplane.svg' position='absolute' left='883.42px' top='176px' />
    </Flex>
  )
}