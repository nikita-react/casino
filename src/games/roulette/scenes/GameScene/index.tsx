import { Stage } from '@pixi/react';
import * as React from 'react';
import RouletteSpinPX from '../../pixi/rouletteSpinPX/RouletteSpinPX';
import GameSceneUi from './GameSceneUi';

interface IRouletteGameSceneProps {
}

const [width, height] = [1000, 500];

const RouletteGameScene: React.FunctionComponent<IRouletteGameSceneProps> = (props) => {
  return <>
    <h1>Roulette</h1>
    <GameSceneUi>
      <Stage width={width} height={height} options={{
        background: 'green',
      }}>
        <RouletteSpinPX />
      </Stage>
    </GameSceneUi>
  </>;
};

export default RouletteGameScene;
