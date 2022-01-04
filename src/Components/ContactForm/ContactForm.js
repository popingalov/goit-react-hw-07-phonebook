import PropTypes from 'prop-types';
import { useState } from 'react';
import { useAddContactMutation } from '../../redux/contacts/contactsApi';
import styles from './ContactForm.module.css';
import Spiner from 'Components/Spiner/Spiner';
function ContactForm({ contacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [createContact, isFetching] = useAddContactMutation();

  const handleChange = e => {
    const { name, value } = e.target;

    name === 'name' ? setName(value) : setNumber(value);
  };
  const resetState = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.length === 100) {
      alert('The maximum limit of 100 contacts has been reached.');
      return;
    }

    contacts.find(contact => name === contact.name)
      ? alert(`Name: ${name} reserved`)
      : createContact({ name, number });
    resetState();
  };

  return (
    <form onSubmit={handleSubmit}>
      {isFetching.isLoading && <Spiner />}
      <label>
        Name
        <br />
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Number
        <br />
        <input
          className={styles.margin}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <br />
      <button className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func,
};

export default ContactForm;
