import React from 'react';
import { useNavigate } from 'react-router-dom';

const PackageDelete = ({ packageInfo, handleDeletePackage }) => {
  const { id, name, status } = packageInfo;
  const navigate = useNavigate();

  const handleClick = () => {
    handleDeletePackage(id);
  };

  const isEdit = () => {
    navigate("/MakeRoutine");
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>{status}</p>
      <button onClick={handleClick}>Delete</button>
      <button onClick={isEdit}>Edit</button>
    </div>
  );
};

export default PackageDelete;
