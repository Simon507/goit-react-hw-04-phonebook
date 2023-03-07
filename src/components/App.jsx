import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

import { useEffect, useState } from 'react';
import { ContactForm } from './form/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from 'components/contactList/ContactList';

const startState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const getContacts = localStorage.getItem('contacts');
    if (getContacts !== null) {
      const parsedContacts = JSON.parse(getContacts);

      return parsedContacts;
    }
    return startState;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContacts => {
    if (
      contacts.some(
        item => item.name.toLowerCase() === newContacts.name.toLowerCase()
      )
    ) {
      return alert(`${newContacts.name} is already exist in contacts`);
    }

    setContacts([...contacts, newContacts]);
  };

  const findItem = findName => {
    setFilter(findName);
  };

  const deleteItem = id => {
    setContacts(contacts.filter(item => item.id !== id));
  };

  return (
    <Layout>
      <GlobalStyle />

      <h1>Phonebook</h1>
      <ContactForm addContact={addContact}></ContactForm>
      <h2>Contacts</h2>
      <Filter onFind={findItem}> </Filter>

      <ContactList
        onDelete={deleteItem}
        contacts={contacts}
        nameFind={filter}
      ></ContactList>
    </Layout>
  );
};
