import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/filterSlice';

const ContactFilter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={evt => dispatch(updateFilter(evt.target.value))}
    />
  );
};

export default ContactFilter;
