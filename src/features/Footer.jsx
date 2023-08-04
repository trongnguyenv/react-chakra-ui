import { HStack, Icon, Link } from "@chakra-ui/react";
import { BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";

export function Footer() {
  return (
    <HStack justify={"center"} h={130} bg={"secondary"}>
      <Link href="#">
        <Icon as={BsFacebook} w={8} h={8} color={"white"} />
      </Link>
      <Link href="#">
        <Icon as={BsTwitter} w={8} h={8} color={"white"} />
      </Link>
      <Link href="#">
        <Icon as={BsLinkedin} w={8} h={8} color={"white"} />
      </Link>
    </HStack>
  );
}
