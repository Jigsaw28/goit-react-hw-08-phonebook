import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const LinkNavigate = styled(NavLink)`
  &:hover {
    color: #2196f3;
  }
`;

export const LinkContact = styled(NavLink)`
  margin-left: 10px;
  
  &:hover {
    color: #2196f3;
  }
`;

export const Nav = styled.div`
  padding-left: 20px;
  display: flex;
  justify-content: start;
`;
