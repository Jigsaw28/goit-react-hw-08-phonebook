import axios from 'axios';

export const fetchContacts = async () => {
  const { data } = await axios(
    'https://connections-api.herokuapp.com/contacts'
  );
  return data;
};
