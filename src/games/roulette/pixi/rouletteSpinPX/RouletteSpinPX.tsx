import { Container, Sprite, useTick } from '@pixi/react';
import * as React from 'react';
import extertalCircle from '../../../../assets/roulette/external-circle.png';
import mediumlCircle from '../../../../assets/roulette/medium-circle.png';
import internalCircle from '../../../../assets/roulette/internal-circle.png';
import wheel from '../../../../assets/roulette/wheel.png';
import arrow from '../../../../assets/roulette/arrow.png';

interface IRouletteSpinPXProps {
}

const POSITOION_SPIN = {
  x: 200,
  y: 300
};

const POSITOION_ARROW = {
  x: 275,
  y: 194,
  rotation: 0.3,
};

const SPEED = 0.05

const RouletteSpinPX: React.FunctionComponent<IRouletteSpinPXProps > = (props) => {
  const [rotationMedium, setRotationMedium] = React.useState(0);
  const [rotationWheel, setRotationWheel] = React.useState(0);

  useTick((delta) => {
    const rotation = delta * SPEED;
    // setRotationWheel(prev => prev - rotation);
    // setRotationMedium(prev => prev + rotation);
  })

  return <Container>
    <Sprite image={extertalCircle} x={POSITOION_SPIN.x} y={POSITOION_SPIN.y} anchor={0.5} />
    <Sprite image={mediumlCircle} x={POSITOION_SPIN.x} y={POSITOION_SPIN.y}  anchor={0.5} rotation={rotationMedium}/>
    <Sprite image={internalCircle} x={POSITOION_SPIN.x} y={POSITOION_SPIN.y} anchor={.5} />
    <Sprite image={wheel} x={POSITOION_SPIN.x} y={POSITOION_SPIN.y} anchor={.5} rotation={rotationWheel}/>
    <Sprite image={arrow} x={POSITOION_ARROW.x} y={POSITOION_ARROW.y} rotation={POSITOION_ARROW.rotation} />
  </Container>;
};

export default RouletteSpinPX;
