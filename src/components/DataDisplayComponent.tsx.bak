import React, { useState } from "react";
import { useDataContext } from "../modules/UseDataProvider";

export const DataDisplayComponent: React.FC = () => {
  const { data, fetchData, postData, deleteData, updateData } =
    useDataContext();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [editData, setEditData] = useState<{
    id: number;
    name: string;
    description: string;
  } | null>(null);

  const handlePostData = async () => {
    await postData({ name, description });
    setName("");
    setDescription("");
  };

  const handleDeleteData = async (id: number) => {
    await deleteData(id);
  };

  const handleUpdateData = async () => {
    if (editData) {
      await updateData(editData.id, {
        name: editData.name,
        description: editData.description,
      });
      setEditData(null);
    }
  };

  const handleEditClick = (item: {
    id: number;
    name: string;
    description: string;
  }) => {
    setEditData(item);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={fetchData}>Refetch Data</button>

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />
        <button onClick={handlePostData}>Submit Data</button>
      </div>

      <div>
        <h2>Delete or Edit Data:</h2>
        <ul>
          {data.map(
            (item: { id: number; name: string; description: string }) => (
              <li key={item.id}>
                <strong>{item.name}:</strong> {item.description}
                <button onClick={() => handleEditClick(item)}>Edit</button>
                <button onClick={() => handleDeleteData(item.id)}>
                  Delete
                </button>
              </li>
            )
          )}
        </ul>
      </div>

      {editData && (
        <div>
          <h2>Edit Data:</h2>
          <input
            type="text"
            value={editData.name}
            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
            placeholder="Enter name"
          />
          <input
            type="text"
            value={editData.description}
            onChange={(e) =>
              setEditData({ ...editData, description: e.target.value })
            }
            placeholder="Enter description"
          />
          <button onClick={handleUpdateData}>Update Data</button>
        </div>
      )}
    </div>
  );
};
