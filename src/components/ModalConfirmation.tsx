import React from "react";
import { useFetchData } from "../modules/UseFetchData";
import { useNavigate } from "react-router-dom";

interface ModalConfirmationProps {
  id: number;
  onClose?: () => void;
}
const ModalConfirmation: React.FC<ModalConfirmationProps> = ({
  id,
  onClose,
}) => {
  const { deleteCategories } = useFetchData();
  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  };
  const handleDelete = () => {
    deleteCategories(id).then(() => {
      // Refresh the page after deletion
      refreshPage();
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      {/* Close Button */}
      <div className="relative bg-white border border-gray-300 p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          &times;
        </button>

        <div className="space-y-2">
          <h1 className="text-left text-xl text-black">
            Yakin nih di delete bos?
          </h1>
        </div>
        <div className="flex gap-10 items-center justify-center">
          <button
            className="w-2/4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="button"
            onClick={handleDelete}
          >
            Delete Data
          </button>
          <button
            className="w-2/4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="button"
            onClick={onClose}
          >
            Cancel Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmation;
