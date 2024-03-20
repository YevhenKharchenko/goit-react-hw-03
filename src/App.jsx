import ContactForm from './components/ContactForm/ContactForm';
import SearchBar from './components/SearchBox/SearchBar';
import ContactList from './components/ContactList/ContactList';
import { useState, useEffect } from 'react';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('contacts');
    // return JSON.parse(savedContacts) ?? initialContacts;
    return initialContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter) ||
      contact.number.split('-').join('').includes(filter)
  );

  const addContact = newContact => {
    setContacts(contacts => [...contacts, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(contacts => contacts.filter(el => el.id !== contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBar value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
