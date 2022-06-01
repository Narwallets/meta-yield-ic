import { IconButton, IconButtonProps, LightMode } from "@chakra-ui/react";
import * as React from "react";
import { Heart } from "phosphor-react";
const FavouriteButton = (props: IconButtonProps) => (
  <LightMode>
    <IconButton
      isRound
      bg="white"
      color="gray.900"
      size="sm"
      _hover={{ transform: "scale(1.1)" }}
      sx={{ ":hover > svg": { transform: "scale(1.1)" } }}
      transition="all 0.15s ease"
      icon={<Heart size={32} />}
      boxShadow="base"
      {...props}
    />
  </LightMode>
);

export default FavouriteButton;
