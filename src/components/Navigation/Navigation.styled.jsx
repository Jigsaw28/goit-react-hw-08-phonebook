import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const LinkNavigate = styled(NavLink)`
  color: #000;

  &:hover {
    color: #f08080;
  }

  &:last-of-type{
    padding-left: 10px;
  }
`;
export const Nav = styled.div`
  padding-left: 20px;
  display: flex;
  justify-content: start;
`;
