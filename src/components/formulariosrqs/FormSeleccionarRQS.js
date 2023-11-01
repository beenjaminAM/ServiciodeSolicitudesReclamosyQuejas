import Button from "../elements/Button"

const FormSeleccionarRQS = ({ tipoFormulario, setTipoFormulario }) => {
    return (
        <div className="SelectForm">
            <Button
                buttonText="Solicitud"            
                tipoFormulario={tipoFormulario}
                setTipoFormulario={setTipoFormulario}
            />
            <Button 
                buttonText="Reclamo"            
                tipoFormulario={tipoFormulario}
                setTipoFormulario={setTipoFormulario}
            />
            <Button 
                buttonText="Queja"
                tipoFormulario={tipoFormulario}
                setTipoFormulario={setTipoFormulario}
            />
        </div>
    )
}

export default FormSeleccionarRQS