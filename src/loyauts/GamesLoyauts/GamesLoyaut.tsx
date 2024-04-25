import * as React from 'react';
import { Outlet } from 'react-router';

interface IGamesLoyautProps {
}

const GamesLoyaut: React.FunctionComponent<IGamesLoyautProps> = (props) => {
  return  <div className='flex flex-col items-center justify-center h-screen gap-5'><Outlet/></div>;
};

export default GamesLoyaut;
