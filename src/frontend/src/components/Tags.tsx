import {
  Badge,
  Flex,
  HStack,
  StackProps,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { Star } from "phosphor-react";

interface CustomerReviewsProps extends StackProps {
  rating: number;
  reviewCount: number;
}

const Tags = (props: CustomerReviewsProps) => {
  const { rating, reviewCount, ...stackProps } = props;
  return (
    <HStack spacing="1" {...stackProps}>
      <Badge colorScheme="orange" variant="solid" px="2" rounded="full">
        {rating}
      </Badge>
      <Flex align="center">
        {Array.from({ length: rating }).map((_, index) => (
          <Star key={index} size={32} />
        ))}
      </Flex>
      <Text
        fontSize="sm"
        fontWeight="medium"
        color={useColorModeValue("gray.600", "gray.300")}
      >
        ({reviewCount})
      </Text>
    </HStack>
  );
};

export default Tags;
