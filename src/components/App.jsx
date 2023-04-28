import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
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
