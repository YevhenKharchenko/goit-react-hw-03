import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete, deletedId, setDeletedId }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li
          key={id}
          className={`${css.contactListItem} ${
            deletedId === id ? css.slideOut : ''
          }`}
        >
          <Contact
            name={name}
            number={number}
            id={id}
            onDelete={onDelete}
            setDeletedId={setDeletedId}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
