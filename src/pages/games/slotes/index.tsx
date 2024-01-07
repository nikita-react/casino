import * as React from 'react';
  import { Link } from 'react-router-dom';
import { ROUTES } from '../../../app/router/utils';

interface ISlotesPageProps {
}

const SlotesPage: React.FunctionComponent<ISlotesPageProps> = (props) => {
  return <div>
    <Link to={ROUTES.main}>return</Link>
  <h1>Slots</h1> </div>;
};

export default SlotesPage;
