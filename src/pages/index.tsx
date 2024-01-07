import * as React from 'react';
import { Link } from 'react-router-dom';
import {ROUTES}  from '../app/router/utils';

interface IMainPageProps {
}

const MainPage: React.FunctionComponent<IMainPageProps> = (props) => {
  return <div className="flex gap-4"> 
    <Link to={ROUTES.games.roulette} >roulette</Link>
    <Link to={ROUTES.games.slots}>slots</Link>
    <Link to={ROUTES.games.hummers}>hummer</Link>
  </div>;
};

export default MainPage;
