import React from 'react';
import Tab from "./Tab/Tab"; 

function Content() {

  return (
    <main className="w-screen h-screen bg-[#FEFEFE]">
        <h1 className="my-20 ml-6 text-xl font-medium"> Menu </h1>
        <Tab />
    </main>
  );
}

export default Content