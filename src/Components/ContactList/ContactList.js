import React from 'react';
import styles from './ContactListItem.module.scss';
import { useDeleteContactMutation } from '../../redux/contacts/contactsApi';
import Spinner from '../Spiner/Spiner';
const ContactList = ({ contacts }) => {
  const [deleteContact, isFetching] = useDeleteContactMutation();

  return (
    <section>
      {isFetching.isLoading && <Spinner />}
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} className={styles.listItem}>
            {contact.name}: {contact.phone}
            <button
              className={styles.btn}
              onClick={() => {
                deleteContact(contact.id);
                alert(`Contcats ${contact.name} be delete`);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactList;
