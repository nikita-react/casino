import * as React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../app/router/utils';
import Roulette from '../../../games/roulette';

interface IRoulettePageProps {
}

const RoulettePage: React.FunctionComponent<IRoulettePageProps> = (props) => {
  return <><Roulette/></>;
};

export default RoulettePage;
    