import { Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BackArrow } from "./BackArrow";
import { Logo } from "./Logo";


export function Header() {
  const router = useRouter();
  const asPath = router.asPath

  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1480}
      align='center'
      mx='auto'
      h='20'
      mt='4'
      mb='4'
      px='6'
    >
      {asPath != '/' && <BackArrow/>}
      <Logo />
    </Flex>
  );
}