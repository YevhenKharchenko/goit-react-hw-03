import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact name={name} number={number} id={id} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
