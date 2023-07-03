import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { Menu, Button } from './UserMenu.styled';



export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state=>state.auth);

  return (
    <Menu>
      <p>Welcome, {user.name}</p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Menu>
  );
};