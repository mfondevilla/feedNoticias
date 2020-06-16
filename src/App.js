import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
//3f5f1dec599f48c59a8bc804836cea15  apinoticias api key
function App() {
  //definir la categoria y noticias
  const[categoria, guardarCategoria] = useState('general');
  const[pais, guardarPais] = useState('ar');
  const[noticias, guardarNoticias] = useState([]);

  useEffect(()=>{
    const consultarAPI = async()=>{
        const key = '3f5f1dec599f48c59a8bc804836cea15';           
      
        const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=${key}`;
    //    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${key}`;
  
        const respuesta = await fetch(url);
        const noticias = await respuesta.json();
        guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria,pais]);
  
  return (
    <Fragment>
      <Header 
        titulo ="Buscador de Noticias" 
      />
      <div className="container white">
          <Formulario
              guardarCategoria = {guardarCategoria}
              guardarPais = {guardarPais}
          />  
           <ListadoNoticias
              noticias = {noticias}
           />
      </div>
     
    </Fragment>
  );
}

export default App;
