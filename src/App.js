import './App.css';
import { useState } from 'react';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import Spiner from 'Components/Spiner/Spiner';
import { useFetchContactsQuery } from './redux/contacts/contactsApi';

function App() {
  const [filter, setFilter] = useState('');
  const { data: contacts, isFetching } = useFetchContactsQuery();

  const takeVisiblContacts = contactsArray =>
    contactsArray.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  return (
    <div>
      {isFetching && <Spiner />}
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} />
      <h2>Contacts</h2>

      <Filter handleChangeFilter={setFilter} />

      <ContactList contacts={takeVisiblContacts(contacts ?? [])} />
    </div>
  );
}

export default App;
