import React from 'react';
import DeleteIcon from '../../assest/image/delete-icon.png';

const DeleteElement = ({onDeleteTab}) => {

  return (
    <div
      className="delete-icon"
      onClick={() => onDeleteTab()}
    >
      <img src={DeleteIcon} alt="delete-icon" />
    </div>
  );
}

export default DeleteElement;