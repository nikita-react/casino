import * as React from 'react';
import { ROULETTE_TABLE_NUMBERS } from './initData';
import { twMerge } from 'tailwind-merge';
import { useAppDispatch } from '../../../../app/store/hook';
import { setActiveNumber, selectActiveNumber } from '../../slices/rouletteSlice';
import { useAppSelector } from '../../../../app/store/hook';

interface IRouletteTableProps {
}
const RouletteTable: React.FunctionComponent<IRouletteTableProps> = ({ }) => {
  const activeNumber = useAppSelector(selectActiveNumber);

  const dispatch = useAppDispatch();
  const handleClick = (number: number) => {
    dispatch(setActiveNumber(number));
  };

  return (
    <div className='flex flex-wrap w-[480px]'>
      {ROULETTE_TABLE_NUMBERS.map(({ number, color }) => (
        <div key={number}
          onClick={() => handleClick(number)}
          className={
            twMerge('w-[40px] h-[40px] flex justify-center items-center text-white border border-solid border-white cursor-pointer hover:border-yellow',
              color === 'red' && 'bg-red',
              color === 'black' && 'bg-black',
              activeNumber === number && 'border-yellow')
          }
        >{number} </div>
      ))
      }
    </div >
  );
};

export default RouletteTable;