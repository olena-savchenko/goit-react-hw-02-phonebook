import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    // console.log('контакт в APP: ', contact);
    // console.log(this.state);

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  render() {
    // console.log(this.state);
    // console.log('Massiv this.state.contacts: ', this.state.contacts);
    // const { items } = this.state.contacts;

    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => {
            return (
              <li key={contact.name}>
                {contact.name}: {contact.number}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
