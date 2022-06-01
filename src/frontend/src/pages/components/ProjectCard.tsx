import {
  AspectRatio,
  Box,
  Button,
  Image,
  Skeleton,
  Stack,
  StackProps,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Wrap,
  Tag,
  Circle,
} from "@chakra-ui/react";
import * as React from "react";
import { CaretRight } from "phosphor-react";
import { truncateText } from "../../utils/textHandlers";
import { useRouter } from "next/router";
import { ProjectProps } from "../../types/project.types";

interface Props {
  project: any;
  rootProps?: StackProps;
}

const ProjectCard = (props: Props) => {
  const { project, rootProps } = props;
  const router = useRouter();
  const spacing = useBreakpointValue({ base: "4", md: "5" });
  const borderRadius = useBreakpointValue({ base: "md", md: "xl" });
  const textColor = useColorModeValue("gray.700", "gray.400");
  const tagColor = useColorModeValue("gray.600", "gray.300");

  if (!props || !project) return <></>;

  const {
    id,
    slug,
    name,
    imageUrl,
    motto,
    avatarUrl,
    verified,
    active,
    description,
    tags,
  } = project as ProjectProps;
  
  return (
    <Stack minW={"370px"} maxW={"370px"} spacing={spacing} {...rootProps}>
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={imageUrl}
            alt={name}
            draggable="false"
            objectFit="contain"
            fallback={<Skeleton />}
            borderRadius={borderRadius}
          />
        </AspectRatio>
        {/*<FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${name} to your favourites`}
        /> */}
      </Box>
      <Stack>
        <Stack p={5} position={"relative"} spacing="1">
          <Stack>
            <Circle
              position={"absolute"}
              backgroundColor={"white"}
              maxH={"65px"}
              maxW={"65px"}
              boxShadow="xl"
              top="-50px"
              left="20px"
            >
              <Circle maxW={"60px"} m="2" overflow={"hidden"}>
                <Image
                  src={avatarUrl}
                  alt="project"
                  width="48px"
                  height="48px"
                />
              </Circle>
            </Circle>
          </Stack>
          <Stack
            spacing={{ base: "1", md: "2" }}
            direction={{ base: "column", md: "row" }}
          >
            <Text mt={5} fontWeight="medium" fontSize={"lg"} color={textColor}>
              {name}
            </Text>
            {/* {verified && (
              <Image
                src={"/check.svg"}
                alt="check"
                width={"16px"}
                height={"16px"}
              />
            )} */}
          </Stack>
          <Stack spacing={{ base: "1", md: "2" }}>
            <Text>{description && truncateText(description, 150)}</Text>
          </Stack>
          <Wrap shouldWrapChildren fontWeight={700} color={tagColor}>
            {tags &&
              tags.map((tag: string) => (
                <Tag
                  backgroundColor={"indigo.100"}
                  key={tag}
                  color="inherit"
                  px="3"
                >
                  {tag}
                </Tag>
              ))}
          </Wrap>
        </Stack>
      </Stack>
      <Stack align="center">
        <Button
          w={"150px"}
          h={"48px"}
          size={"md"}
          colorScheme="indigo"
          rightIcon={<CaretRight size={20} />}
          onClick={() => router.push(`/project/${id}`)}
        >
          Fund Now
        </Button>
      </Stack>
    </Stack>
  );
};

export default ProjectCard;
