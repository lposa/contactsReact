import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import Contacts from "./components/Contacts";
import { useState } from "react";

function App() {
  const [showAddContact, setShowAddContact] = useState(false);

  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts"))
  );

  localStorage.setItem("contacts", JSON.stringify(contacts));
  console.log(contacts);

  //Add Contact

  const addContact = async (contact) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newContact = { id, ...contact };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const toggleReminder = (id) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === id
          ? { ...contact, reminder: !contact.reminder }
          : contact
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddContact(!showAddContact)}
        showAdd={showAddContact}
      />
      {showAddContact && <AddContact onAdd={addContact} />}
      {contacts.length > 0 ? (
        <Contacts
          contacts={contacts}
          onDelete={deleteContact}
          onToggle={toggleReminder}
        />
      ) : (
        "No Contacts Available"
      )}
    </div>
  );
}

export default App;
