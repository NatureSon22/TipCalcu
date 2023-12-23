import { useState } from "react";

const percentageList = [5, 10, 15, 25, 50];

const Percentage = ({ setInfo, tipData}) => {

    const handleChange = (val) => {
        if(parseInt(val) > 100) {
            return;
        }

        if (val.length > 0 && isNaN(val[val.length - 1])) {
            return;
        }
    
        setInfo((prev) => { return {...prev, tipPercent: val / 100 } });
    }

    const handleClick = (percent) => {
        setInfo((prev) => { return {...prev, tipPercent: percent / 100 } });
    }

    return (
        <div className="percentage-container">
            <p>Select Tip %</p>

            <div className="percentage-field">
                {
                    percentageList.map((percent, index) => <button key={index} className="percentage-btn" onClick={() => handleClick(percent)} >{`${percent}%`}</button>)
                }
                <input className="percentage-custom" type="text" placeholder="Custom" value={tipData && !percentageList.includes(tipData * 100) ? tipData * 100 : ''} onChange={(e) => handleChange(e.target.value)} />
            </div>
        </div>
    )
}

export default Percentage;

