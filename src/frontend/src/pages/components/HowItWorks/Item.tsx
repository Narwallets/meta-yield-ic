import { Image, Text, VStack } from "@chakra-ui/react";
import * as React from "react";

interface Props {
  title: string | JSX.Element;
  description: string;
  icon: string;
}

const HowItWorks = ({ title, description, icon }: Props) => (
  <VStack align="flex-start">
    <Image src={icon} alt="project" width="72px" height={"72px"} />
    <Text
      fontSize={{ base: "lg", md: "2xl" }}
      lineHeight={{ base: "5", md: "8" }}
      fontWeight="semibold"
    >
      {title}
    </Text>
    <Text
      fontSize={{ base: "sm", md: "md" }}
      lineHeight="6"
      fontWeight="normal"
    >
      {description}
    </Text>
  </VStack>
);

export default HowItWorks;
