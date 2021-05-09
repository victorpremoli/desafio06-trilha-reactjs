import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";

export function Header() {
  return (
    <Flex 
      as='header' 
      w='100%' 
      maxWidth={1480} 
      align='center'
      mx='auto'
      h='20'
      mt='4'
      px='6'
    >
      <Logo />
    </Flex>
  );
}