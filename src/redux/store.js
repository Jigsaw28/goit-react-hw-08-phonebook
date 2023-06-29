import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './auth/authSlice';

export const reducer = combineReducers({
  auth: authReducer,
  contacts: contactReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: reducer,
})

