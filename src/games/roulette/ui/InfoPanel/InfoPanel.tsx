import { useAppSelector } from "../../../../app/store/hook";
import { selectActiveNumber } from "../../slices/rouletteSlice";

interface IInfoPanelProps {

}

const ITEMS = [

    {
        id: 'balance',
        title: 'Balance',
        icon: '',
    },
    {
        id: 'winBet',
        title: 'Win Bet',
        icon: '',
    },
    {
        id: 'currentBet',
        title: 'Current Bet',
        icon: '',
    },
    {
        id: 'activeNumber',
        title: 'Bet Number',
        icon: '',
    },
]
const InfoPanel = () => {
    const activeNumber = useAppSelector(selectActiveNumber);

    return (
        <div className="flex justify-between px-4">
            {ITEMS.map(({ id, title, icon }) => (
                <div key={id}>
                    <div>{title}</div>

                    <div>{icon}</div>
                </div>
            ))}
        </div>
    )
}
export default InfoPanel