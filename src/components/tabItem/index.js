import React from 'react';
import DeleteElement from './deleteElement';
import ActiveElement from './activeElement';

const TabItem = (props) => {
  const { isSelect, method, content, isTabListInvalid, handleCalbackDeleteTab, handleCalbackActiveTab } = props;
  const [isHover, setIsHover] = React.useState(false);


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
      onMouseEnter={(e) => {
        setIsHover(true);
      }}
      onMouseLeave={(e) => {
        setIsHover(false);
      }}
      style={{ backgroundColor: isSelect ? '#f5c7ae' : 'white' }}
    >
      <div className="method">{method}</div>
      <div className="content">
        {contentFixed(content)}
      </div>
      {isHover && isTabListInvalid && <DeleteElement onDeleteTab={onDeleteTab} />}
      {isSelect && !isHover && <ActiveElement />}
    </div>
  );
}

export default TabItem;