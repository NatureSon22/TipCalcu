import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Field = ({label, icon, setInfo, target, tipData}) => {
    //const [input, setInput] = useState('');
    const [style, setStyle] = useState('');

    useEffect(() => {    
        setStyle(tipData[0] === '0' ? 'field-error' : '');
    }, [tipData])

    const handleChange = (val) => {
    
        if ((val.length > 0 && isNaN(val[val.length - 1]))) {
            return;
        }
    
        if (val.length > 1 && val[0] === '0') {
            val = val.slice(1);
        }
    
        //setInput(val);
        setInfo(prev => ({ ...prev, [target]: val }));
    }

    return (
        <div className="field-container">
            <div className="label">
                <p className="label-main">{label}</p>
                {
                        tipData === '0' && <p className="label-error">Can't be zero</p>
                }

            </div>
            <div className={`field ${style}`}>
                <FontAwesomeIcon className="icon" icon={icon}></FontAwesomeIcon>
                <input type="text" placeholder="0" value={tipData}  onChange={(e) => handleChange(e.target.value)} />
            </div>
        </div>
    )
}

export default Field;