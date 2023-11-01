import InputLabel from "../elements/InputLabel"

const FormQueja = ({
    categoriaQueja, setCategoriaQueja
}) => {
    
    return (
        <>
            <h2>Queja</h2>
                  
                <InputLabel 
                    labelText={"Categoria"}
                    inputId={"categoriaQueja"}
                    inputValue={categoriaQueja}
                    setInputValue={setCategoriaQueja}
                />
        </>
    )
}

export default FormQueja