import { Flex, Stack, StackProps, Text } from "@chakra-ui/layout";
import Logo from "components/logo";
import React from "react";

const Info = (props: StackProps) => {
  return (
    <Stack direction="row" alignItems="center" {...props}>
      <Logo />
      <Flex direction="column" lineHeight="5">
        <Text fontSize="lg" fontWeight="semibold" textStyle="default">
          Chaktor
        </Text>
        <Text fontSize="sm">anubra266@chaktor.dev</Text>
      </Flex>
    </Stack>
  );
};

export default Info;
