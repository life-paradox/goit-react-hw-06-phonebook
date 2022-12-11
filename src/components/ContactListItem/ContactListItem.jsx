import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { deleteContact } from 'redux/contacts/contactsSlice';

const ContactListItem = memo(({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDelete = e => {
    e.preventDefault();

    dispatch(deleteContact(e.currentTarget.id));

    console.log(e.currentTarget.id);
  };

  return (
    <li className={css.item}>
      <span>
        {name}: {number}
      </span>
      <button className={css.deleteBtn} id={id} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
});

export default ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
