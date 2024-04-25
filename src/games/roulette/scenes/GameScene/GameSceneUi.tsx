import * as React from 'react';
import RouletteTable from '../../ui/RouletteTable/RouletteTable';
import BetPanel from '../../ui/BetPanel/BetPanel';

interface IGameSceneUiProps {
    children?: React.ReactNode
}

const GameSceneUi: React.FunctionComponent<IGameSceneUiProps> = ({ children }) => {
    return <div className='relative'>
        <div className='absolute right-[5%] top-[35%]'><RouletteTable /></div>
        <div className="absolute bottom-[5%] right-[5%]">
            <BetPanel />
        </div>
        {children}
    </div >;
};

export default GameSceneUi;
