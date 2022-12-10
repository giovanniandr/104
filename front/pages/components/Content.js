import React from 'react';
import Tab from "./Tab/Tab"; 

function Content() {

  return (
    <main className="w-screen h-screen bg-[#FEFEFE]">
      <div className="flex items-center h-1/5"> 
        <h1 className="ml-6 float-left text-xl font-medium"> Menu </h1>
        <Tab />
      </div>
    </main>
  );
}

export default Content