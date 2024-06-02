import React, { FC } from "react";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const EditModal: FC<EditModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    onSubmit();
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          {/* Add your form fields here */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
