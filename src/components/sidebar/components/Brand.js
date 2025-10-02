import React from "react";

// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let textColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <Text
        fontSize='24px'
        fontWeight='bold'
        color={textColor}
        my='32px'
        letterSpacing='tight'>
        DASHBOARD
      </Text>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
