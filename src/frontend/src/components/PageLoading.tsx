import { Container, Skeleton, Stack } from "@chakra-ui/react";

const PageLoading = () => {
  return (
    <Container maxW="container.xl" h="full">
      {Array.from({ length: 10 }).map((_, i) => (
        <Stack m="2rem" key={`skeleton-${i}`}>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      ))}
    </Container>
  );
};

export default PageLoading;
