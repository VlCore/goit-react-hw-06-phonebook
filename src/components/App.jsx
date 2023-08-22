import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addContact,removeContact, setFilter } from 'redux/contactsSlice';
import { Section } from "./Section/Section"
import { SimpleForm } from "./Form/SimpleForm";
import { nanoid } from 'nanoid'
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { Container, GeneralTitle } from "./App.styled";
  
  const App = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.contacts.filter);
  
    useEffect(() => {
      const localStorageContacts = JSON.parse(localStorage.getItem('root'));
      if (localStorageContacts) {
        dispatch(addContact(localStorageContacts));
      }
    }, [dispatch]);
  
    useEffect(() => {
      localStorage.setItem('root', JSON.stringify(contacts));
    }, [contacts]);
  
    const onAddContact = user => {
      if (contacts.find(el => el.name === user.name)) {
        alert(`${user.name} is already in contacts`);
        return;
      }
      dispatch(addContact([{ ...user, id: nanoid() }]));
    };
  
    const onChangedFilter = ({ target: { value } }) => {
      dispatch(setFilter(value));
    };
  
    const handleRemoveContact = id => {
      dispatch(removeContact(id));
    };
  
    return (
      <Container>
        <GeneralTitle>Phonebook</GeneralTitle>
        <Section>
          <SimpleForm onAddContact={onAddContact} />
        </Section>
  
        <Section title="Find contacts by name">
          <Filter onChangedFilter={onChangedFilter} filterValue={filter} />
        </Section>
  
        <Section title="Contacts">
          <ContactsList contacts={contacts} filterValue={filter} removeContact={handleRemoveContact} />
        </Section>
      </Container>
    );
  };
  
  export default App;

  