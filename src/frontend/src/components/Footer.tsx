/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import {
  Text,
  ButtonProps,
  HStack,
  Container,
  Square,
  Image,
  Stack,
  Link,
  Spacer,
} from "@chakra-ui/react";
import router from "next/router";

const Footer: React.FC<ButtonProps> = (props) => {
  return (
    <Container
      maxW="container.2xl"
      pt={{ base: "3rem", lg: "4rem" }}
      pb={{ base: "1rem", lg: "1rem" }}
      as={Stack}
      direction={{ base: "column", md: "row" }}
      spacing={4}
      justify={{ base: "center", md: "space-between" }}
      align={{ base: "center", md: "center" }}
    >
    <Stack onClick={() => router.push(`/`)} cursor="pointer">
          <Image
            objectFit="cover"
            src="/logo.svg"
            alt="logo"
          />
      </Stack>
      <Stack direction={{ base: "column", sm: "row" }} alignItems={{base: "center", sm: "flex-start"}} spacing={6}>
        <Text fontSize="xs">© 2022 Meta Pool Inc</Text>
        <Link href="https://rctracks.io/privacy-policy/" target={"_blank"} fontSize="xs">
          Privacy
        </Link>
        <Link href="https://metapool.app/legal-notice-risk-disclosures.html" target={"_blank"} fontSize="xs">
          Terms and Conditions
        </Link>
      </Stack>
      <Spacer />
      <Stack direction={"row"} spacing={6}>
        <Link href="https://twitter.com/meta_pool" target={"_blank"} variant="link">
          <img src="/twitter.svg" alt="Twitter" />
        </Link>
      </Stack>
    </Container>
  );
};

export default Footer;
