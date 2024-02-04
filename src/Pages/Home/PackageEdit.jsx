import React, { useState } from "react";

const PackageEdit = ({ packageInfo, handleEditPackage }) => {
  const [newName, setNewName] = useState(packageInfo.name);
  const [newStatus, setNewStatus] = useState(packageInfo.status);

  const handleSave = () => {
    handleEditPackage(packageInfo.id, newName, newStatus);
  };

  return (
    <div>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="text"
        value={newStatus}
        onChange={(e) => setNewStatus(e.target.value)}
      />
      <button onClick={handleSave}>저장</button>
    </div>
  );
};

export default PackageEdit;
