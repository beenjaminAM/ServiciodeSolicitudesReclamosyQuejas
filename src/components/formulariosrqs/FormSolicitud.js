import InputLabel from "../elements/InputLabel"

const FormSolicitud = ({
    categoriaSolicitud, setCategoriaSolicitud
}) => {
    
    return (
        <>
            <h2>Solicitud</h2>
                  
                <InputLabel 
                    labelText={"Categoria"}
                    inputId={"categoriaSolicitud"}
                    inputValue={categoriaSolicitud}
                    setInputValue={setCategoriaSolicitud}
                />
        </>
    )
}

export default FormSolicitud