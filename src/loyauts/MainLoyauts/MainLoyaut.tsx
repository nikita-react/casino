import {FC} from 'react';
import { Outlet } from 'react-router';

interface IMainLoyautProps {}
const MainLoyaut:FC<IMainLoyautProps> = () => {
  return <div><Outlet/></div>
}

export default MainLoyaut