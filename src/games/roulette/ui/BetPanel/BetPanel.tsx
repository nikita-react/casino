import { selectActiveNumber } from "../../slices/rouletteSlice";
import { useAppSelector } from "../../../../app/store/hook";


interface IBetPanelProps {

}
const BetPanel: React.FunctionComponent<IBetPanelProps> = () => {

    const activeNumber = useAppSelector(selectActiveNumber);
    return (
        <div>{activeNumber}</div>
    )
}
export default BetPanel