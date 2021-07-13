import React from "react";
import { FaTimes } from "react-icons/fa";

function Contact({ contact, onDelete, onToggle }) {
  return (
    <div
      className={`task ${contact.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(contact.id)}
    >
      <h3>
        {contact.name}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(contact.id)}
        />
      </h3>
      <p>{contact.phone}</p>
    </div>
  );
}

export default Contact;
