"use client";
import React from "react";
import Filters from "./Filters/Filters";
import ContentList from "./ContentList/ContentList";

interface Props {
  url: string;
}

const Main: React.FC<Props> = ({ url }) => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-12 min-h-screen py-7 px-2 md:px-5 lg:px-10">
      <Filters className=" col-span-1 md:col-span-3 md:mr-6" />
      <ContentList className=" col-span-1 md:col-span-9 mt-14" url={url} />
    </main>
  );
};

export default Main;
