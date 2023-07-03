import { useSelector } from 'react-redux';
import { LinkNavigate, Nav, LinkContact } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Nav>
      <LinkNavigate to="/">Home</LinkNavigate>
      {isLoggedIn && <LinkContact to="/contacts">Contacts</LinkContact>}
    </Nav>
  );
};
