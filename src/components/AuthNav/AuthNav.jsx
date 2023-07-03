import { AuthLink, Auth } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <Auth>
      <AuthLink to="/register">
        Register
      </AuthLink>
      <AuthLink to="/login">
        Log In
      </AuthLink>
    </Auth>
  );
};