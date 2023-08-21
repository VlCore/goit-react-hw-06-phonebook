// import { Component } from "react"
import React, { useEffect, useState} from 'react'
import { Section } from "./Section/Section"
import { SimpleForm } from "./Form/SimpleForm";
import { nanoid } from 'nanoid'
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
// import { filterContacts } from './ContactsList/ContactFilter';
import { Container, GeneralTitle } from "./App.styled";

  const originalContacts = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]
  
  export const App = () => {
    const [contacts, setContacts] = useState(originalContacts)
    const [filter, setFilter] = useState('')

    useEffect(() => {
      const localStorageContacts = JSON.parse(localStorage.getItem('PhoneBookContacts'))
      if (localStorageContacts) {
        setContacts(localStorageContacts)
      }
    },[])

    useEffect(() => {
      localStorage.setItem('PhoneBookContacts', JSON.stringify(contacts))
    }, [contacts])
  
    const onAddContact = user => {
   if (contacts.find(el => el.name === user.name)) {
      alert(`${user.name} is already in contacts`);
      return;
    }
    setContacts(prev => [...prev, {...user, id:nanoid()}])
  }

 const onChangedFilter = ({ target: { value } }) => {
    setFilter(value)
    console.log(filter)
  }
  
  const removeContact = id => {
    setContacts(prevContacts => prevContacts.filter(item => item.id !== id))
  }


    return (
      <Container>
        <GeneralTitle>Phonebook</GeneralTitle>
        <Section >
          <SimpleForm onAddContact={onAddContact}/>
        </Section>

        <Section title="Find contacts by name">
        <Filter onChangedFilter={onChangedFilter} filterValue={filter} />
        </Section>

        <Section title="Contacts">
        <ContactsList
  contacts={contacts}
  filterValue={filter}
  removeContact={removeContact}
/>
        </Section>
        </Container>
    );
  }