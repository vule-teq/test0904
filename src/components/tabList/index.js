import React from 'react';
import AddIcon from '../../assest/image/add-icon.png';
import ThreeDotIcon from '../../assest/image/three-dot-icon.png';
import { initialTabList } from '../../initialData';
import TabItem from '../tabItem';
import {bodyPage} from './helper';


const TabList = () => {
  const [tabList, setTabList] = React.useState(initialTabList);
  const [length, setLength] = React.useState(tabList.length);
  const [activeTab, setActiveTab] = React.useState(0);

  const onAddTab = () => {
    const newTab = {
      id: length + 1,
      method: 'GET',
      content: 'Unitled Request',
      body: "This is body of request: "
    }
    setTabList([...tabList, newTab]);
    setLength(length + 1);
  }

  const handleCalbackDeleteTab = (id) => {
      const newTabList = tabList.filter((item) => item.id !== id);
      setTabList(newTabList);
      setLength(length - 1);
  }

  const handleCalbackActiveTab = (id) => {
    setActiveTab(id);
  }

  const isSelect = (id) => {
    return tabList.length===1 ? true: id === activeTab;
  }

  return (

    <div className="tab-list-container">
      <div className="tab-list">
        <ul>
          {tabList.map((tabItem, index) => {
            return (
              <TabItem
                key={tabItem.id}
                isSelect={isSelect(tabItem.id)}
                isTabListInvalid={tabList.length > 1}
                method={tabItem.method}
                content={tabItem.content}
                handleCalbackDeleteTab={() => handleCalbackDeleteTab(tabItem.id)}
                handleCalbackActiveTab={() => handleCalbackActiveTab(tabItem.id)}
              />
            );
          })}
        </ul>
        <div
          className="add-tab"
          onClick={() => onAddTab()}
        >
          <img src={AddIcon} alt="add-icon" />
        </div>
        <div className="add-tab">
          <img src={ThreeDotIcon} alt="add-icon" />
        </div>
      </div>
      <div className="body-text">
        {bodyPage(tabList, activeTab)}
      </div>
    </div>

  );
}

export default TabList;