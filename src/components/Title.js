import "./Title.css";
import React from "react";
import { useFetchTitleQuery } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import TitleItem from "./titleItem";

const Title = () => {
  const { data, error, isFetching } = useFetchTitleQuery();
  console.log(data);

  let content;
  if (isFetching) {
    content = <Skeleton times={6} className="h-8 w-full" />;
  } else if (error) {
    content = <div>Veri Yükleme Hatası!!</div>;
  } else {
    content = data.map((title) => {
      const header = <div>{title.name}</div>;
      return (
        <ExpandablePanel key={title.id} header={header}>
          <TitleItem title={title} />
        </ExpandablePanel>
      );
    });
  }

  return <div>{content}</div>;
};

export default Title;
