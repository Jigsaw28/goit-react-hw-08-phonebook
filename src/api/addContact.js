import axios from 'axios';

export const addContact = async newContact => {
  const { data } = await axios.post(
    'https://connections-api.herokuapp.com/contacts',
    newContact
  );
  return data;
};
