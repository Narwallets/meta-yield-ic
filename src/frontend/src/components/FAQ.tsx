import { Box, Text, Stack, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import * as React from "react";
import { FAQItem } from "../types/project.types";
import parse from "html-react-parser";
const FAQ = (props: { data: FAQItem[] }) => {
  const data = props.data;
  if (!data) return <></>;

  return (
    <>
    <Text fontSize="sm" fontWeight="subtle">
    FAQ
  </Text>
    <Accordion mt={5}>
        {data.map((item: FAQItem, index: number) => 
            ( <AccordionItem key={`faq_item_${index}`}>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    <Text fontWeight="semibold"> {item.title} </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                {parse(item.content)}
                </AccordionPanel>
              </AccordionItem>)
        )}
    </Accordion>
    </>
  );
};

export default FAQ;
