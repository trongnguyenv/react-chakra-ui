import { Flex, Heading } from "@chakra-ui/react";

export function Badge({ bg, children }) {
  return (
    <Flex justify={"center"} alignItems={"center"}>
      <Heading
        size={"sm"}
        color={"white"}
        textAlign={"center"}
        w={130}
        bg={bg}
        // borderRadius={30}
        px={3}
        py={3}
      >
        {children}
      </Heading>
    </Flex>
  );
}
