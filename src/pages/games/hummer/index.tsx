import * as React from 'react';

import { Link } from 'react-router-dom';
import { ROUTES } from '../../../app/router/utils';

interface IHummerPageProps {
}

const HummerPage: React.FunctionComponent<IHummerPageProps> = (props) => {
  return  <div>     <Link to={ROUTES.main}>return</Link> <h1>hummer</h1> </div>;
};

export default HummerPage;
