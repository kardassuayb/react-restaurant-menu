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
      return (
        <div
          key={item.id}
          className="flex justify-between items-center mb-2 border rounded p-2 "
        >
          <div>
            <img alt="food" src={item.image} className="w-28 h-24 rounded" />
          </div>
          <div className="flex flex-col content-end">
            <div className="font-semibold text-sky-500 p-2 uppercase">
              {item.name}
            </div>
            <div className="text-sm p-2">{item.description}</div>
          </div>
          <div className="font-semibold text-sky-500 text-center">
            {item.price}
          </div>
        </div>
      );
    });
  }

  return <div>{content}</div>;
};

export default TitleItem;
