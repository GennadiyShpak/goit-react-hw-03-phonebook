import React, { Component } from 'react';

import ContactList from './ContactList';
import Form from './Form';
import Filter from './Filter';
import Section from './Section';
import initialContactList from './initialContactList.json';

class App extends Component {
  state = {
    contacts: initialContactList,
    filter: '',
  };

  componentDidMount() {
    const localContacts = localStorage.getItem('contacts');
    const parceLocalSContacts = JSON.parse(localContacts);

    if (parceLocalSContacts) {
      this.setState({ contacts: parceLocalSContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.setState.contacts !== prevState) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = data => {
    const { id, name, number } = data;
    const contact = {
      id,
      name,
      number,
    };
    const arrContactsName = this.state.contacts.map(item => {
      return item.name.toLowerCase();
    });

    if (arrContactsName.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  getFilterName = () => {
    const { filter, contacts } = this.state;
    const normalizedName = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedName),
    );
  };

  render() {
    const { filter } = this.state;

    const visibleContactName = this.getFilterName();

    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Filter filter={filter} onChange={this.onFilterChange} />

          <ContactList
            contacts={visibleContactName}
            onDelete={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
