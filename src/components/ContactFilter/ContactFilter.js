import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from '../../redux/filterSlice';

const ContactFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <input
      type="text"
      name={filter}
      placeholder="Search contacts"
      value={filter}
      onChange={onChange}
    />
  );
};

export default ContactFilter;
