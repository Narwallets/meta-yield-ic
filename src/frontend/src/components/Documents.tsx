import {
  Box,
  Text,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Link,
} from "@chakra-ui/react";
import * as React from "react";
import { DocumentItem, FAQItem } from "../types/project.types";
import { ExternalLinkIcon } from "@chakra-ui/icons";
const Documents = (props: { data: DocumentItem[] }) => {
  const data = props.data;
  if (!data) return <></>;

  return (
    <Box>
      <Text fontSize="sm" fontWeight="subtle">
        DOCUMENTS
      </Text>
      <Stack mt={5}>
        {data.map((item: DocumentItem, index: number) => (
          <Link key={`link_document_${index}`} href={item.url} isExternal>
            {item.title} <ExternalLinkIcon mx="2px" />
          </Link>
        ))}{" "}
      </Stack>
    </Box>
  );
};

export default Documents;
