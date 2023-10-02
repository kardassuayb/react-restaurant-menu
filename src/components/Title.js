import "./Title.css";
import React from "react";
import { useFetchTitleQuery } from "../store";
import Skeleton from "./Skeleton";
import TitleItem from "./titleItem";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Title = () => {
  const { data, error, isFetching } = useFetchTitleQuery();

  let content;
  if (isFetching) {
    content = <Skeleton times={6} className="h-8 w-full" />;
  } else if (error) {
    content = <div>Veri Yükleme Hatası!!</div>;
  } else {
    content = data.map((title) => (
      <AccordionItem key={title.id}>
        <AccordionItemHeading>
          <AccordionItemButton>{title.name}</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <TitleItem></TitleItem>
        </AccordionItemPanel>
      </AccordionItem>
    ));
  }

  return (
    <>
      <Accordion allowZeroExpanded>{content}</Accordion>
    </>
  );
};

export default Title;
