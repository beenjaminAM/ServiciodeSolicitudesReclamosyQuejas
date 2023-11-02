import React from 'react'
import {BsFillEyeFill, BsFillPencilFill} from 'react-icons/bs'
import "./Table.css"

function TablaReclamo({filas}) {
  return (
    <div className='table-wrapper'>
        <table className='table'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Categoria</th>
                <th className='expand'>Descripcion</th>
                <th>Registrado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                filas.map((fila, idx) => {
                  return (<tr>
                    <td>{fila.id}</td>
                    <td>{fila.categoria}</td>
                    <td>{fila.descripcion}</td>
                    <td>{fila.fechaCreacion}</td>
                    <td>
                      <span className='actions'>
                        <BsFillEyeFill/>
                        <BsFillPencilFill/>
                      </span>
                    </td>
                  </tr>)
                })
              }
            </tbody>
        </table>

    </div>
  )
}

export default TablaReclamo