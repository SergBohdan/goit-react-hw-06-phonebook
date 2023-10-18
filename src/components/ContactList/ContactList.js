import React from 'react';
import PropTypes from 'prop-types';
import { ClearBtn, List, ListBtn, ListItem } from './ContactListStyled';

export const ContactList = ({ contacts, onDeleteContact, onClearContacts }) => (
  <List>
    {contacts.map(contact => (
      <ListItem key={contact.id}>
        {contact.name}: {contact.number}
        <ListBtn type="button" onClick={() => onDeleteContact(contact.id)}>
          Delete
        </ListBtn>
      </ListItem>
    ))}
    <ClearBtn onClick = {onClearContacts}>Clear contacts</ClearBtn>
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

