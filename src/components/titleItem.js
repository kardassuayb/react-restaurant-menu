import React from "react";
import { useFetchTitleItemQuery } from "../store";
import Skeleton from "./Skeleton";

const TitleItem = ({ title }) => {
  const { data, error, isFetching } = useFetchTitleItemQuery(title);
  console.log(data);

  let content;
  if (isFetching) {
    content = <Skeleton times={6} className="h-8 w-full" />;
  } else if (error) {
    content = <div>Veri Yükleme Hatası!!</div>;
  } else {
    content = data.map((item) => {
      return <div key={item.id}>{item.name}</div>;
    });
  }

  return <div>{content}</div>;
};

export default TitleItem;
