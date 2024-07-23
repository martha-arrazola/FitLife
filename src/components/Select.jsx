const Select = ({ label, value, name, onchange, opciones, err }) => {

    return (
        <>

            <label>{label}</label>
            <select value={value} name={name} onChange={onchange}>
                <option value="">Seleccionar...</option>
                {opciones.map((opcion) => (
                    <option key={opcion.value} value={opcion.value}>
                        {opcion.label}
                    </option>
                ))}
            </select>
            {err && <p className="error">{err}</p>}
        </>

    )
}

export default Select;