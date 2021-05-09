import { Image } from "@chakra-ui/react";

export function Logo() {
  return (
    <Image
      src='/Logo.svg'
      objectFit='cover'
      alt='Worldtrip logo'
      mx='auto'
    />
  );
}