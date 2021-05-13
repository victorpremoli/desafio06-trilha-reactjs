import { Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export function BackArrow() {
  return (
    <Link href='/' >
      <a>
        <Image src='/Arrow.svg' />
      </a>
    </Link>
  );
}