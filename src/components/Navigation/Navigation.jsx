import { useSelector } from 'react-redux';
import { LinkNavigate, Nav } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Nav>
      <LinkNavigate to="/">Home</LinkNavigate>
      {isLoggedIn && <LinkNavigate to="/contacts">Contacts</LinkNavigate>}
    </Nav>
  );
};
