import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './contactsSlice'
import { persistStore, persistReducer } from 'redux-persist';
import {
    // persistStore,
    // persistReducer
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const persistedReducer = persistReducer(persistConfig, contactsReducer)
  
const store = configureStore({
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    reducer: {
        contacts: persistedReducer,
    }
})

const persistor = persistStore(store);

export { store, persistor}