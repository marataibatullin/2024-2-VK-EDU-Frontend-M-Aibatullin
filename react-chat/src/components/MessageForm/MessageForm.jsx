import React, { useState, useRef } from 'react';
import { IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';

import './MessageForm.css';

const MessageForm = ({ onSendMessage }) => {
  const [messageText, setMessageText] = useState('');
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    setMessageText(e.target.textContent);
  };

  const handleAttachFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Файл прикреплён:', file);
    }
  };

  const handleSubmit = () => {
    if (messageText.trim()) {
      onSendMessage(messageText);
      setMessageText('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        document.execCommand('insertHTML', false, '<br><br>');
        e.preventDefault();
      } else {
        e.preventDefault();
        handleSubmit();
      }
    }
  };

  return (
    <form
      className="message-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div
        className="form-input"
        name="message-text"
        data-placeholder="Cообщение"
        contentEditable="true"
        onInput={handleInputChange}
        onKeyDown={handleKeyDown}
        suppressContentEditableWarning={true}
      >
        {messageText}
      </div>
      <IconButton
        className="paperclip"
        onClick={handleAttachFileClick}
        aria-label="Прикрепить файл"
      >
        <AttachFileIcon />
      </IconButton>
      <input
        type="file"
        id="imageInput"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </form>
  );
};

export default MessageForm;
