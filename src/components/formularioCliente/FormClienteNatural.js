

const FormClienteNatural = ({ clienteNaturalNombre, setClienteNaturalNombre }) => {
    const handleInputChange = (event) => {
        setClienteNaturalNombre(event.target.value);
    };
    
    return (
        <>
            <h2>Cliente Persona</h2>
            <label htmlFor="clienteNombre">Cliente Nombre</label>
            <input
                type="text"
                id="clienteNombre"
                value={clienteNaturalNombre}
                onChange={handleInputChange}
                required
            />
                    
        </>
    )
}

export default FormClienteNatural