import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (contacts, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data
   } catch (e) {
      console.log( e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (e) {
      console.log( e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);