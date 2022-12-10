import React from "react";
import { useState } from "react";

function Tab() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }
  
  const active = "inline-block p-4 bg-red rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300";
  const inactive = "text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300";


  return (
    <div>
      <div>
        <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li onClick={() => { toggleTab(1)}} class="mr-2">
          <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
              Breakfast
            </a>
          </li>

          <li onClick={() => { toggleTab(2)}} class="mr-2">
            <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
              Lunch
            </a>
          </li>

          <li onClick={() => { toggleTab(3)}} class="mr-2">
            <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
              Dinner
            </a>
          </li>
        </ul>
      </div>

      <div hidden={toggleState === 1 ? active : inactive}> Content 1</div>
      <div hidden={toggleState === 2 ? active : inactive}> Content 2</div>
      <div hidden={toggleState === 3 ? active : inactive}> Content 3</div>
    </div>
  );
}
export default Tab;
