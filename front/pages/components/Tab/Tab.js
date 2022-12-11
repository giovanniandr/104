import React from "react";
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

function Tab() {

    const blue = {
        50: '#F0F7FF',
        100: '#C2E0FF',
        200: '#80BFFF',
        300: '#66B2FF',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        700: '#0059B2',
        800: '#004C99',
        900: '#003A75',
      };
      
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
    padding: 20px 12px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    border-radius: 12px;
    opacity: 0.6;
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
    <div class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"> </div>
    <TabPanel value={0}>Breakfast page</TabPanel>
    <TabPanel value={1}>Lunch page</TabPanel>
    <TabPanel value={2}>Dinner page</TabPanel>
    <TabPanel value={3}>Add new menu</TabPanel>
  </TabsUnstyled>
  </div>
  );
}
export default Tab;
