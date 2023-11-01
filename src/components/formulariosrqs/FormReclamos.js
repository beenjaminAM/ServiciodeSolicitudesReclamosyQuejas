import InputLabel from "../elements/InputLabel"

const FormReclamo = ({
    categoriaReclamo, setCategoriaReclamo
}) => {
    
    return (
        <>
            <h2>Reclamo</h2>
            <InputLabel 
                    labelText={"Categoria"}
                    inputId={"categoriaReclamo"}
                    inputValue={categoriaReclamo}
                    setInputValue={setCategoriaReclamo}
            />
        </>
    )
}

export default FormReclamo