import { Box, HStack, Image, Text } from "@chakra-ui/react";

export function TravelTypes() {
  return (
    <HStack spacing='24' w='100%' justifyContent='center' marginY='40' alignItems='center' >
      <Box boxSizing='border-box'>
        <Image marginX='auto' src='/cocktail.svg'/>
        <Text fontSize='24' fontWeight='semibold' color='#47585B' align='center'>Vida Noturna</Text>
      </Box>
      <Box>
        <Image marginX='auto' src='/surf.svg'/>
        <Text fontSize='24' fontWeight='semibold' color='#47585B' align='center'>Praia</Text>
      </Box>
      <Box>
        <Image marginX='auto' src='/building.svg'/>
        <Text fontSize='24' fontWeight='semibold' color='#47585B' align='center'>Moderno</Text>
      </Box>
      <Box>
        <Image marginX='auto' src='/museum.svg'/>
        <Text fontSize='24' fontWeight='semibold' color='#47585B'  align='center'>Clássico</Text>
      </Box>
      <Box>
        <Image marginX='auto' src='/earth.svg'/>
        <Text fontSize='24' fontWeight='semibold' color='#47585B' align='center'>e mais ...</Text>
      </Box>
    </HStack>
  );
}