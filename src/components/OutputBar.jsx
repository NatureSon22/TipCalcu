const OutputBar = ({label, tip}) => {

    return (
        <div className="output-container">
            <div className="output-label">
                <p>{label}</p>
                <p>/ person</p>
            </div>

            <p className="output-total">{`$${isFinite(tip) ? tip.toFixed(2) : '0.00'}`}</p>
        </div>
    )
}

export default OutputBar;