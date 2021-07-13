import { useState } from "react";
import React from "react";

function AddContact({ onAdd }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault(); //so it doesnt actually submit to a page
    if (!name) {
      alert("Please add a contact");
      return;
    }

    onAdd({ name, phone, reminder });
    setName("");
    setPhone("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Contact</label>
        <input
          type="text"
          placeholder="Add Contact"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Phone</label>
        <input
          type="text"
          placeholder="Add Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
}

export default AddContact;
