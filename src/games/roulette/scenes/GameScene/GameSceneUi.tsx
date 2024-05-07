import * as React from 'react';
import RouletteTable from '../../ui/RouletteTable/RouletteTable';
import BetPanel from '../../ui/BetPanel/BetPanel';
import InfoPanel from '../../ui/InfoPanel/InfoPanel';

interface IGameSceneUiProps {
    children?: React.ReactNode
}

const GameSceneUi: React.FunctionComponent<IGameSceneUiProps> = ({ children }) => {
    return <div className='relative'>
        <div className='absolute left-[0%] top-[10%] w-full'><InfoPanel /></div>
        <div className='absolute right-[5%] top-[35%]'><RouletteTable /></div>
        <div className="absolute bottom-[10%] right-[35%]">
            <BetPanel />
        </div>
        {children}
    </div >;
};

export default GameSceneUi;
