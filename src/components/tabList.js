import React from 'react';
import TabItem from './tabItem';
import AddIcon from '../assest/image/add-icon.png';
import ThreeDotIcon from '../assest/image/three-dot-icon.jpeg';
import { initialTabList } from '../initialData';


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

  const bodyPage = (id) => {  
    const body = tabList.find(item => item.id === id);
    return body ? `${body.body}${body.content} (id: ${body.id})` : 'There is no body';
  }

  return (

    <div className="tab-list-container">
      <div className="tab-list">
        <ul>
          {tabList.map((tabItem, index) => {
            return (
              <TabItem
                style={{backgroundColor: activeTab === tabItem.id ? 'red' : 'orange'}}
                key={tabItem.id}
                method={tabItem.method}
                content={tabItem.content + tabItem.id}
                handleCalbackDeleteTab={() => {
                  const newTabList = tabList.filter((item) => item.id !== tabItem.id);
                  setTabList(newTabList);
                  setLength(length - 1);
                }}
                handleCalbackActiveTab={() => {
                  setActiveTab(tabItem.id);
                }}
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
        {bodyPage(activeTab)}
      </div>
    </div>

  );
}

export default TabList;