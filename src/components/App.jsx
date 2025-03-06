import SearchBox from "./SearchBox/SearchBox";
import { useState } from "react";
import ContactList from "./ContactList/ContactList";
export default function App() {
  // const [feedback, setFeedback] = useState(() => {
  //   const savedFeedbacks = localStorage.getItem("feedbacks-value");
  //   if (savedFeedbacks !== null) {
  //     return JSON.parse(savedFeedbacks);
  //   }
  //   return {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   };
  // });
  const contacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  const [filter, setFilter] = useState("");
  const handleFilterChange = (newValue) => {
    setFilter(newValue);
    console.log(newValue);
  };
  return (
    <>
      <h1> Phonebook</h1>
      {/* <ContactForm /> */}
      <SearchBox onFilter={handleFilterChange} />
      <ContactList filteredValues={filter} value={filter} contacts={contacts} />
    </>
  );
}
