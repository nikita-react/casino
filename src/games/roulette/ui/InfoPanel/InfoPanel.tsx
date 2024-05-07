import { useAppSelector } from "../../../../app/store/hook";
import { selectActiveNumber, selectCurrentBet } from "../../slices/rouletteSlice";

interface IInfoPanelProps {

}

type Item = { id: "balance" | "winBet" | "currentBet" | "activeNumber", title: string, icon: string };

const ITEMS: Item[] = [
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
    const currentBet = useAppSelector(selectCurrentBet);

    return (
        <div className="flex justify-between px-4">
            {ITEMS.map(({ id, title, icon }) => (
                <div key={id}>
                    <div>{title}</div>
                    <div>{icon}</div>
                    <div>
                        {id === 'activeNumber' && activeNumber}
                        {id === 'currentBet' && currentBet}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default InfoPanel