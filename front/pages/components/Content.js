import React from 'react'

function Content() {
  return (
    <main className="w-screen h-screen bg-[#FEFEFE]">
      <div className="flex items-center h-1/5"> 
      <h1 className="ml-6 float-left text-xl font-medium"> Menu </h1>
      <ul className="flex flex-wrap ml-6 p-1 w-2/5 bg-[#F5F5F5] rounded-lg text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li className="mr-2 w-1/5">
          <a
            href="#"
            className="inline-block py-3 px-4 w-full text-[#363C3C] bg-white rounded-lg active"
            aria-current="page"
          >
            Breakfast
          </a>
        </li>
        <li className="mr-2 w-40">
          <a
            href="#"
            className="inline-block py-3 px-4 w-full rounded-lg text-[#737373] bg-red-300 hover:text-[#363C3C]"
          >
            Lunch
          </a>
        </li>
        <li className="mr-2 w-40">
          <a
            href="#"
            className="inline-block py-3 px-4 w-full bg-red-200 rounded-lg text-[#737373] hover:text-[#363C3C]"
          >
            Dinner
          </a>
        </li>
        <li className="mr-2 w-40">
          <a
            href="#"
            className="inline-block py-3 px-4 w-full bg-red-200 rounded-lg text-[#737373] hover:text-[#363C3C]"
          >
            Add
          </a>
        </li>
      </ul>
      </div>
    </main>
  );
}

export default Content