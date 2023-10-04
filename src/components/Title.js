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
      const header = <div className="text-sky-700 font-bold">{title.name}</div>;
      return (
        <ExpandablePanel key={title.id} header={header}>
          <TitleItem title={title} />
        </ExpandablePanel>
      );
    });
  }

  return (
    <div
      className="bg-slate-50 rounded opacity-90"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1623062553275-39028026d7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1490&q=80")`,
      }}
    >
      {content}
    </div>
  );
};

export default Title;
