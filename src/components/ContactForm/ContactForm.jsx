import React from 'react';
import { useDispatch } from 'react-redux';
import css from './ContactForm.module.css';
import { addContact } from 'redux/contacts/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const newContact = { name: form.name.value, number: form.number.value };

    dispatch(addContact(newContact));
    form.reset();
  };

  return (
    <form onSubmit={submitHandler} className={css.form}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.input}
          autoComplete="false"
        />
      </label>

      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.input}
          autoComplete="false"
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
