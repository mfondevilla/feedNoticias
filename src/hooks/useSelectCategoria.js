import React, {useState, Fragment} from 'react';

const useSelectCategoria = (temaInicial, opciones, paises) => {

    //state del custom hook;
    const [state, actualizarState] = useState(temaInicial);

    const actualizarInicial = (e)=>{
        actualizarState({
           ...state,
           [e.target.name]: e.target.value
        });
    }

    const SelectNoticiasCategoria = ()=>(
     <Fragment>
        <select
            className="browser-default"
            name="tema"
            value = {state.tema}
            onChange={actualizarInicial}
        >
            {opciones.map(opcion =>(
                <option key = {opcion.value} value ={opcion.value}>{opcion.label}</option>
            ))}
        </select>
        <select
          className="browser-default"
          name="pais"
          value = {state.pais}
          onChange={actualizarInicial}
      >
          {paises.map(opcion =>(
              <option key = {opcion.value} value ={opcion.value}>{opcion.label}</option>
          ))}
      </select>
      </Fragment>
    );
    return [state, SelectNoticiasCategoria];
}
 
export default useSelectCategoria;