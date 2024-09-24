import React from 'react';
import './Modal.css';

const ConfirmModal = ({ isOpen, title, message, onConfirm, onClose, showCancel = true, button_name = '' }) => {
  if (!isOpen) return null;

  return (
    <div className="confirm-modal-overlay">
      <div className="confirm-modal-content">
        <h3>{title}</h3>
        <p className='mt-2'>{message}</p>
        <div className="confirm-modal-buttons">
          {showCancel && <button onClick={onClose} className='button2'>Cancel</button>}
          <button onClick={onConfirm} className='button1'>{button_name}</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;