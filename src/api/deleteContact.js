import axios from 'axios';

export const deleteContact = async (id) => {
  const { data } = await axios.delete(
    `https://connections-api.herokuapp.com/contacts/${id}`
  );
  return data;
};
