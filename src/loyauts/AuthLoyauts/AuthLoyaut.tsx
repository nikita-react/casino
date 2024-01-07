import * as React from 'react';
import { Outlet } from 'react-router';

interface IAuthLoyautProps {
}

const AuthLoyaut: React.FunctionComponent<IAuthLoyautProps> = (props) => {
  return  <div><Outlet/></div>;
};

export default AuthLoyaut;
