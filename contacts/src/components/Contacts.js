import React from "react";
import Contact from "./Contact";

function Contacts({ contacts, onDelete, onToggle }) {
  return (
    <>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
}

export default Contacts;
