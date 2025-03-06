import css from "../ContactList/ContactList.module.css";
import Contacts from "../Contact/Contact";
export default function ContactList({ contacts, filteredValues, onDelete }) {
  return (
    <ul className={css.ContactList}>
      {contacts
        .filter((el) => {
          return el.name.toLowerCase().includes(filteredValues.toLowerCase());
        })
        .map((contact) => {
          return (
            <li className={css.listItem} key={contact.id}>
              <Contacts onDelete={onDelete} contacts={contact}></Contacts>
            </li>
          );
        })}
    </ul>
  );
}
