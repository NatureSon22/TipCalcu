import Field from './Field'
import { faDollarSign, faUser } from '@fortawesome/free-solid-svg-icons';
import Percentage from './Percentage'
import { useEffect, useState } from 'react';

const InputField = ({setTipData, tipData}) => {

    useEffect(() => {
        setTipData(tipData);
    }, [tipData, setTipData]);

    return (
        <div className='input-container'>
            <Field label="Bill" icon={faDollarSign} setInfo={setTipData} target="amount" tipData={tipData.amount} ></Field>
            <Percentage setInfo={setTipData} tipData={tipData.tipPercent} ></Percentage>
            <Field label="Number of People" icon={faUser} setInfo={setTipData} target="peopleCount" tipData={tipData.peopleCount}></Field>
        </div>
    )
}

export default InputField;