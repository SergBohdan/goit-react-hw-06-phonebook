import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactFilter from '../ContactFilter/ContactFilter';
import ContactList from '../ContactList/ContactList';
import {GlobalStyle} from '../GlobalStyles';
import { deleteContact } from 'redux/contactSlice';

function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
      <ContactList onClearContacts={() => dispatch(deleteContact(''))} />
      <GlobalStyle />
    </div>
  );
}

export default App;
