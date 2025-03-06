import css from "../Contact/contacts.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contacts({ contacts: { name, number, id }, onDelete }) {
  return (
    <div className={css.info}>
      <div>
        <div className={css.iconWrapper}>
          <AiOutlineUser />

          <p>{name}</p>
        </div>
        <div className={css.iconWrapper}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={css.button}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
