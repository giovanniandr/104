import React from "react";
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

import Dropdown from "./Dropdown";
import Cards from "./Cards";

function Tab() {

      const grey = {
        50: '#f6f8fa',
        100: '#eaeef2',
        200: '#d0d7de',
        300: '#afb8c1',
        400: '#8c959f',
        500: '#6e7781',
        600: '#57606a',
        700: '#424a53',
        800: '#32383f',
        900: '#24292f',
      };

    const Tab = styled(TabUnstyled)`
    color: #7D7D7D;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    background-color: transparent;
    width: 100%;
    padding: 10px 12px;
    margin: 6px 6px;
    border: none;
    border-radius: 7px;
    display: flex;
    justify-content: center;
  
    &:hover {
      background-color: #FFFFFF;
    }
  
    &:focus {
      outline: none;
      color: #fff;
    }
  
    &.${tabUnstyledClasses.selected} {
      background-color: #FFFFFF;
      color: #363C3C;
    }
  
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;
  
  const TabPanel = styled(TabPanelUnstyled)(
    ({ theme }) => `
    width: 100%;
    font-size: 0.875rem;
    `,
  );
  
  const TabsList = styled(TabsListUnstyled)(
    ({ theme }) => `
    min-width: 400px;
    background-color: #F5F5F5;
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    `,
  );

  return (
    <div className="w-full ml-6 mr-20"> 

    <h1 className=" ml-6 mr-6 mb-6 float-left text-2xl font-medium text-[#363C3C]"> Menu </h1>
    <TabsUnstyled defaultValue={0} className=" ">
    <TabsList className="w-2/4 mb-6">
      <Tab>Breakfast</Tab>
      <Tab>Lunch</Tab>
      <Tab>Dinner</Tab>
      <Tab>Add</Tab>
    </TabsList>
    
    <div className="my-8 h-px w-[99.5%] bg-gray-200 border-0 dark:bg-gray-700"> </div>
    <TabPanel value={0} className="w-[90%] h-screen fixed">
      <Dropdown />
      <Cards />

     </TabPanel>
    <TabPanel value={1}>
      <Dropdown />
    </TabPanel>
    <TabPanel value={2}>
      <Dropdown />
    </TabPanel>
    <TabPanel value={3}>Add new menu</TabPanel>
  </TabsUnstyled>
  </div>
  );
}
export default Tab;
