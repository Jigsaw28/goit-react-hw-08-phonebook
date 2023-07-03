import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { LoginPageContainer, Form, Input, Label, Button } from './LoginPage.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value
    if (!email || !password) {
      toast.info('Enter your email and password', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }
    dispatch(
      logIn({
        email, password
      })
    );
    e.currentTarget.reset();
  };

   return (
    <LoginPageContainer>
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Log In</Button>
       </Form>
       <ToastContainer />
     </LoginPageContainer>
  );
};

export default LoginPage