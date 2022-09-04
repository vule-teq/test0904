import React from 'react';
import DeleteIcon from '../assest/image/delete-icon.png';

const TabItem = (props) => {
  const { method, content, handleCalbackDeleteTab, handleCalbackActiveTab } = props;

  const onDeleteTab = () => {
    handleCalbackDeleteTab();
  }

  const onSelectTab = () => {
    handleCalbackActiveTab();
  }


  const contentFixed = (orginalContent) => {
    if (orginalContent.length > 12) {
      return orginalContent.slice(0, 12) + '...';
    }
    return orginalContent;
  }

  return (
    <div 
      className="tab-item-container"
      id="tab-item"
      onClick={() => onSelectTab()}
    >
      <div className="method">{method}</div>
      <div className="content">
        {contentFixed(content)}
      </div>
      <div
        className="delete-icon"
        onClick={() => onDeleteTab()}
      >
        <img src={DeleteIcon} alt="delete-icon" />
      </div>
    </div>
  );
}

export default TabItem;