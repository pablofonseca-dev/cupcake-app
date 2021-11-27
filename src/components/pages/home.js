import Input from "../forms/Input/Input";
import Banner from "../sections/Banner";
import Cupcakes from "./cupcakes";
import {useEffect, useState} from 'react';

const Home = () => {
  const [busqueda, setBusqueda] = useState('');
  const [colorBusqueda, setColorBusqueda] = useState('');

  useEffect(() => {
    setColorBusqueda(busqueda);
  }, [busqueda]);

  const buscar = (event) => {
    const {target} = event; 
    const {value} = target; 
    setBusqueda(value);
  }

  return (
    <>
      <Banner></Banner>
      <h2 className="s-center">Buscar</h2>
      <form className="ed-container">
        <div className="ed-item s-center form__item ">
          <input type="text" className="l-40" onChange={buscar} value={busqueda} placeholder="Buscar Cupcakes por sabor"></input>
        </div>
      </form>
      <Cupcakes peticion={(colorBusqueda.length > 0) ?
      `cupcakes?sabor_like=${colorBusqueda}` : "cupcakes"}></Cupcakes>
    </>
  );
};

export default Home;
