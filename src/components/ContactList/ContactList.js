import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import PropTypes from 'prop-types';
import { ClearBtn, List, ListBtn, ListItem } from './ContactListStyled';

const ContactList = ({ onClearContacts }) => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          {contact.name}: {contact.number}
          <ListBtn
            type="button"
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </ListBtn>
        </ListItem>
      ))}
      <ClearBtn onClick={onClearContacts}>Clear contacts</ClearBtn>
    </List>
  );
};

ContactList.propTypes = {
  onClearContacts: PropTypes.func.isRequired,
};

export default ContactList;
