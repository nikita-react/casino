import { selectActiveNumber } from "../../slices/rouletteSlice";
import { useAppSelector } from "../../../../app/store/hook";
import bet50 from '../../../../assets/roulette/bet-50.png';
import bet100 from '../../../../assets/roulette/bet-100.png';
import bet200 from '../../../../assets/roulette/bet-200.png';
import bet400 from '../../../../assets/roulette/bet-400.png';
import bet800 from '../../../../assets/roulette/bet-800.png';


interface IBetPanelProps {

}

const BETS = [
    {
        value: 50,
        img: bet50,
    },
    {
        value: 100,
        img: bet100,
    },
    {
        value: 200,
        img: bet200,
    },
    {
        value: 400,
        img: bet400,
    },
    {
        value: 800,
        img: bet800,
    },
]
const BetPanel: React.FunctionComponent<IBetPanelProps> = () => {

    const activeNumber = useAppSelector(selectActiveNumber);

    const picBet = (value: number) => {
        return value
    }
    return (
        <div>
            <div className="flex items-center gap-3">
                {BETS.map(({ value, img }) => {
                    return (
                        <div key={value} onClick={() => picBet(value)}>
                            <img src={img} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default BetPanel