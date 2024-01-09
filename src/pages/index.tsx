import * as React from 'react';
import { Link } from 'react-router-dom';
import {ROUTES}  from '../app/router/utils';
import { useAppSelector } from '../app/store/hook';
import { selectUserName } from '../entities/user/slices/userSlice';
import { useGetUserQuery } from '../entities/user/api/userApi';

interface IMainPageProps {
}

const MainPage: React.FunctionComponent<IMainPageProps> = (props) => {

  const {data: users} = useGetUserQuery({id: 1});

  return <div className="flex gap-4"> 
  {/* <h1>{users}</h1> */}
    <Link to={ROUTES.games.roulette} >roulette</Link>
    <Link to={ROUTES.games.slots}>slots</Link>
    <Link to={ROUTES.games.hummers}>hummer</Link>
  </div>;
};

export default MainPage;
