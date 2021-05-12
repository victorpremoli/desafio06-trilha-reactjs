import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Divider() {
  return (
    <Flex flexDirection='column' maxWidth={1240} alignItems='center' justifyContent='center' marginX='auto' >
      <Image src='/Divider.svg' width={90} height='3px'/>
      <Flex marginY='60px' flexDirection='column' alignItems='center'>
        <Text  fontSize='36px' color='#47585B' >Vamos nessa?</Text>
        <Text fontSize='36px' color='#47585B'> Então escolha seu continente </Text>
      </Flex>
    </Flex>
  );
}