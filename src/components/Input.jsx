const Input = ({ label, name, value, onchange, err }) => {

    return (
        <>
            <label>{label}</label>
            <input type="text" name={name} value={value} onChange={onchange} />
            {err && <p className="error">{err}</p>}

        </>

    )
}

export default Input