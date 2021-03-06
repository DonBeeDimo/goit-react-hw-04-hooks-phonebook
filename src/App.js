import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container';
import PhonebookForm from './components/PhonebookForm';
import PhonebookList from './components/ContactList';
import Filter from './components/Filter';
import shortid from 'shortid';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      toast(`🤔 ${name} is already in contacts.`);
    } else if (contacts.find(contact => contact.number === number)) {
      toast(`🤔 ${number} is already in contacts.`);
    } else if (name.trim() === '' || number.trim() === '') {
      toast.info("😱 Enter the contact's name and number phone!");
    } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
      toast.error('💩 Enter the correct number phone!');
    } else {
      setContacts(prevContacts =>
        [contact, ...prevContacts].sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          return 0;
        }),
      );
    }
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <PhonebookForm onAddContact={addContact} />

      <h2>Contacts</h2>
      {contacts.length > 1 && (
        <Filter value={filter} onChangeFilter={changeFilter} />
      )}
      {contacts.length > 0 ? (
        <PhonebookList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
      <ToastContainer
        autoClose={3000}
        theme="colored"
        toastStyle={{ backgroundColor: 'red' }}
      />
    </Container>
  );
}
