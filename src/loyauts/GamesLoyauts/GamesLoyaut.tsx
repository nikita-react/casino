import * as React from 'react';
import { Outlet } from 'react-router';

interface IGamesLoyautProps {
}

const GamesLoyaut: React.FunctionComponent<IGamesLoyautProps> = (props) => {
  return  <div><Outlet/></div>;
};

export default GamesLoyaut;
