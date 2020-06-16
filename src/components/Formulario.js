import React from 'react';
import styles from './Formulario.module.css';
import useSelectCategoria from '../hooks/useSelectCategoria';
import PropTypes from "prop-types";

const Formulario = ({guardarCategoria, guardarPais}) => {
    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entrentainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'}
    ];

    const PAISES = [
        {value: 'ar', label: 'Argentina'},
        {value: 'at', label: 'Austria'},
        {value: 'br', label: 'Brazil'},
        {value: 'ca', label: 'Canada'},
        {value: 'mx', label: 'México'}
    ];
    //usar cutsm hooks
    const[categoria, SelectNoticiasCategoria] = useSelectCategoria({tema: 'general', pais: 'ar'}, OPCIONES, PAISES);
  
    //al hacer submit coger la cateogría y pasar la a la app.js
    const buscarNoticias = e =>{
        e.preventDefault();
        guardarCategoria(categoria.tema);
        guardarPais(categoria.pais);
    }
    
    return ( 
        <div className={`${styles.buscador}row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra noticias por cateogría</h2>
                    <SelectNoticiasCategoria />
                    
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className ={`${styles['btn-block']} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>

        </div>
      
     );
}

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired,
    guardarPais: PropTypes.func.isRequired
}
export default Formulario;