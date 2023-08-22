import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        filter: '',
    },
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(...action.payload)
        },
        removeContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        },
    },
})
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts'],
  };

export const { addContact, removeContact, setFilter } = contactsSlice.actions

export default persistReducer(persistConfig, contactsSlice.reducer);