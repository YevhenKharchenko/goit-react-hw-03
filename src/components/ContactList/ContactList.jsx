import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useState } from 'react';

const ContactList = ({ contacts, onDelete }) => {
  const [deletedId, setDeletedId] = useState('');

  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li
          key={id}
          className={
            (css.contactListItem, deletedId === id ? css.slideOut : '')
          }
        >
          <Contact
            name={name}
            number={number}
            id={id}
            onDelete={onDelete}
            handleId={setDeletedId}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
