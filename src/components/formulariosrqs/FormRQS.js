import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Elementos
import InputSelect from '../elements/InputSelect';


//Formularios Clientes
import FormClienteNatural from '../formularioCliente/FormClienteNatural';
import FormEmpresa from '../formularioCliente/FormEmpresa';

//Formulario RQS
import FormSolicitud from './FormSolicitud';
import FormQueja from './FormQueja';
import FormReclamo from './FormReclamos';

import FormSeleccionarRQS from './FormSeleccionarRQS';

const FormRQS = ({ 
  users
}) => {

  // Datos Cliente Natural
  const [clienteNaturalNombre, setClienteNaturalNombre] = useState(null)


  // Datos Cliente Empresa
  const [clienteEmpresaNombre, setClienteEmpresaNombre] = useState(null)
  
  const [tipoDeCliente, setTipoDeCliente] = useState(null)
  

  const [tipoFormulario, setTipoFormulario] = useState('')
  let formularioRQS;

  const [categoriaQueja, setCategoriaQueja] = useState("")
  const [categoriaSolicitud, setCategoriaSolicitud] = useState("")
  const [categoriaReclamo, setCategoriaReclamo] = useState("")

  const history = useHistory()

  switch (tipoFormulario) {
    case 'Solicitud':
      formularioRQS = 
      <FormSolicitud 
        categoriaSolicitud={categoriaSolicitud}
        setCategoriaSolicitud={setCategoriaSolicitud}
      />;
      break;
    case 'Reclamo':
      formularioRQS = 
      <FormReclamo 
        categoriaReclamo={categoriaReclamo}
        setCategoriaReclamo={setCategoriaReclamo}
      />;
      break;
    case 'Queja':
      formularioRQS = 
      <FormQueja 
        categoriaQueja={categoriaQueja}
        setCategoriaQueja={setCategoriaQueja}
      />;
      break;
    default:
      formularioRQS = null; // Caso por defecto aquí
  }

const handleFormSubmit = (e) => {
  e.preventDefault();
  alert(
    `Tipo Cliente: ${tipoDeCliente}
    \nCliente Empresa: ${clienteEmpresaNombre}
    \nCliente Natural: ${clienteNaturalNombre}
    \n\nTipo de Registro: ${tipoFormulario}
    \nReclamo: ${categoriaReclamo}
    \nQueja: ${categoriaQueja}
    \nSolicitud: ${categoriaSolicitud}`
  )
  history.push('/')

}; 

  
  return (
    <main className="Form">
      <form onSubmit={handleFormSubmit}>

        <h2>Formulario</h2>
        {/* Seleccionar Registrar Informacion de una Persona Natural o Juridica */}
        <label htmlFor="">Tipo de cliente</label>
        <InputSelect
          setElement={setTipoDeCliente}
          elements={ 
            [{ label: 'Persona natural', value: 'Persona' },
            { label: 'Empresa', value: 'Empresa' }]   
          }
        />

        {/* Formulario Informacion Persona Natural o Juridica */}
        {tipoDeCliente === 'Persona' && (
          <>
            <FormClienteNatural 
              clienteNaturalNombre={clienteNaturalNombre}
              setClienteNaturalNombre={setClienteNaturalNombre}
            />
          </>
        )}
        {tipoDeCliente === 'Empresa' && (
          <>
            <FormEmpresa 
              clienteEmpresaNombre={clienteEmpresaNombre}
              setClienteEmpresaNombre={setClienteEmpresaNombre}
            />
          </>
        )}
        {/* Seleccionar Registrar Reclamo Queja o Solicitud */}
        <FormSeleccionarRQS tipoFormulario={tipoFormulario} setTipoFormulario={setTipoFormulario} />

        {/* Formulario de registro de Reclamo Queja o Solicitud */}
        {formularioRQS}

        <div>
          <button className='buttonSolicitud' type="submit"
            disabled={tipoFormulario === ""? true: false}
          >Enviar Solicitud</button>
        </div>
      </form>
    </main>
  );
};

export default FormRQS;