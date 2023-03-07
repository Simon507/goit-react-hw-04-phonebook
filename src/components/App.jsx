import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

import { Component } from 'react';
import { ContactForm } from './form/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from 'components/contactList/ContactList';

const startState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const getContacts = localStorage.getItem('contacts');
    console.log(getContacts);
    if (getContacts !== null) {
      const parsedContacts = JSON.parse(getContacts);
      this.setState({ contacts: parsedContacts });
      return;
    }
    this.setState({ contacts: startState });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContacts => {
    if (
      this.state.contacts.some(
        item => item.name.toLowerCase() === newContacts.name.toLowerCase()
      )
    ) {
      return alert(`${newContacts.name} is already exist in contacts`);
    }

    this.setState(pervState => {
      return {
        contacts: [...pervState.contacts, newContacts],
      };
    });
  };

  findItem = findName => {
    this.setState({ filter: findName });
  };

  deleteItem = id => {
    this.setState(pervState => {
      return {
        contacts: pervState.contacts.filter(item => item.id !== id),
      };
    });
  };

  render() {
    return (
      <Layout>
        <GlobalStyle />

        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter onFind={this.findItem}> </Filter>

        <ContactList
          onDelete={this.deleteItem}
          contacts={this.state.contacts}
          nameFind={this.state.filter}
        ></ContactList>
      </Layout>
    );
  }
}
