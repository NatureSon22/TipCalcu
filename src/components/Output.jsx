import { useEffect, useState } from "react";
import OutputBar from "./OutputBar";

const Output = ({ tipData : { amount, tipPercent, peopleCount }, setTipData }) => {
    const totalTipAmount = parseFloat(amount) * tipPercent;
    const totalAmountWithTip = parseFloat(amount) + totalTipAmount;
    const tipAmountPerPerson = totalTipAmount / parseFloat(peopleCount);
    const totalAmountPerPerson = totalAmountWithTip / parseFloat(peopleCount);
    const [style, setStyle] = useState('unclickable');

    useEffect(() => {
            setStyle(isFinite(totalAmountPerPerson) && isFinite(tipAmountPerPerson) ? null : 'unclickable');
    }, [totalAmountPerPerson, tipAmountPerPerson])

    const handleClick = () => {
        setTipData({amount : '', peopleCount : '', tipPercent : ''});
    }

    return (
        <div className="output-field">
            <OutputBar label="Tip Amount" tip={tipAmountPerPerson} ></OutputBar>
            <OutputBar label="Total" tip={totalAmountPerPerson} ></OutputBar>
            <button onClick={handleClick} className={style} >RESET</button>
        </div>
    )
}

export default Output;