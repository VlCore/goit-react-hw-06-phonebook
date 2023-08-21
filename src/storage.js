import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './contactsSlice'

const storage = configureStore({
    reducer: {
        contacts: contactsReducer,
    }
})

export default  storage