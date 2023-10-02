import React from "react";
import { useFetchTitleItemQuery } from "../store";
import Skeleton from "./Skeleton";
import { AccordionItemPanel } from "react-accessible-accordion";

const TitleItem = () => {
  const { data, error, isFetching } = useFetchTitleItemQuery();

  let content;
  if (isFetching) {
    content = <Skeleton times={6} className="h-8 w-full" />;
  } else if (error) {
    content = <div>Veri Yükleme Hatası!!</div>;
  } else {
    content = data.map((item) => (
      <AccordionItemPanel key={item.id}></AccordionItemPanel>
    ));
  }

  return <div>{content}</div>;
};

export default TitleItem;
