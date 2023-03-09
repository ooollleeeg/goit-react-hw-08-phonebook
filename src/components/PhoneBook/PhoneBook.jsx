import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactsList from './ContactsList/ContactsList';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactForm from './ContactForm/ContactForm';

import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
} from 'redux/contacts/contacts-operations';

import { setFilter } from 'redux/filter/filter-slice';

import { getFilteredContacts } from 'redux/contacts/contacts-selecrors';
import { getFilter } from 'redux/filter/filter-selectors';

import styles from './phoneBooks.module.scss';

const PhoneBook = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleAddContact = ({ name, number }) => {
    dispatch(fetchAddContact({ name, number }));
  };

  const handleDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  const handleFilter = ({ target }) => dispatch(setFilter(target.value));

  const isContacts = Boolean(filteredContacts);

  return (
    <div>
      <h1 className={styles.title}>PhoneBook</h1>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Add contact</h3>
          <ContactForm onSubmit={handleAddContact} />
        </div>
        <div className={styles.block}>
          <ContactFilter value={filter} handleChange={handleFilter} />
          {isContacts && (
            <ContactsList
              removeContact={handleDeleteContact}
              contacts={filteredContacts}
            />
          )}
          {!isContacts && <p>No contacts in list</p>}
        </div>
      </div>
    </div>
  );
};
export default PhoneBook;
