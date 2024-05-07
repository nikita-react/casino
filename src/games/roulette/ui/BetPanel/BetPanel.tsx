import { setCurrentBet } from "../../slices/rouletteSlice";
import { useAppDispatch } from "../../../../app/store/hook";
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
    const dispatch = useAppDispatch();

    const picBet = (value: number) => {
        dispatch(setCurrentBet(value));
    };

    return (
        <div>
            <div className="flex items-center gap-3">
                {BETS.map(({ value, img }) => (
                    <div className="cursor-pointer hover:scale-[1.05] transition" key={value} onClick={() => picBet(value)} onContextMenu={(e) => {
                        e.preventDefault();
                        picBet(-value)
                    }
                    } >
                        <img src={img} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default BetPanel

