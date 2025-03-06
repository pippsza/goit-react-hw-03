import SearchBox from "./SearchBox/SearchBox";
import { useState } from "react";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import css from "./App.module.css";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts-value");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });
  useEffect(() => {
    localStorage.setItem("contacts-value", JSON.stringify(contacts));
  }, [contacts]);
  const [filter, setFilter] = useState("");
  const handleFilterChange = (newValue) => {
    setFilter(newValue);
    console.log(newValue);
  };

  function onAdd(newContact) {
    const id = nanoid();

    setContacts((contacts) => {
      console.log();
      return [
        ...contacts,
        {
          id: id,
          name: newContact.name,
          number: newContact.number,
        },
      ];
    });
  }
  const deleteContact = (id) => {
    setContacts(contacts.filter((del) => del.id !== id));
  };
  return (
    <div className={css.mainApp}>
      <h1> Phonebook</h1>
      <ContactForm onAdd={onAdd} />
      <SearchBox onFilter={handleFilterChange} />
      <ContactList
        onDelete={deleteContact}
        filteredValues={filter}
        value={filter}
        contacts={contacts}
      />
    </div>
  );
}
