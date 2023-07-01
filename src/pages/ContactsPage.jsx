import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { Contactlist } from 'components/ContactList/ContactList';
import { Container } from 'components/App.styled';
import { getContactsThunk } from 'redux/contactsThunk';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(state => state.auth);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getContactsThunk());
    }
  }, [dispatch, isLoggedIn]);

  return  (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contactlist />
    </Container>
  ) 
};

export default ContactsPage;
