import css from "../ContactList/ContactList.module.css";
import Contacts from "../Contact/Contact";
export default function ContactList({ contacts, filteredValues }) {
  return (
    <ul className={css.ContactList}>
      {contacts
        .map((contact) => {
          return (
            <li className={css.listItem} key={contact.id}>
              <Contacts contacts={contact}></Contacts>
            </li>
          );
        })
              .filter((el) => { return () )}
    </ul>
  ); 
}
