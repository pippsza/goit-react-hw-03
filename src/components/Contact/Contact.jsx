import css from "../Contact/contacts.module.css";
export default function Contacts({ contacts: { name, number } }) {
  return (
    <div className={css.info}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={css.button}>Delete</button>
    </div>
  );
}
