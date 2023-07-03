import { styled } from 'styled-components';

export const LoginPageContainer = styled.div`
  padding: 0 20px;
`;
export const Form = styled.form`
  padding-top: 30px;
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px;
  outline: none;
  border-radius: 4px;
  border: 1px solid rgba(33, 33, 33);
  margin-left: 15px;
`;

export const Label = styled.label`
  &:last-of-type {
    margin-left: 20px;
  }
`;
export const Button = styled.button`
  margin-top: 20px;
  display: block;
  width: 200px;
  padding: 10px 5px;
  border-radius: 4px;
  font-weight: 700;
  border: 0px;
  background-color: #2196f3;
  color: #fff;
`;
