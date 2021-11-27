import useFetch from "../../hooks/useFetch";
import Cupcake from "../cards/Cupcake";

const Cupcakes = ({titulo, peticion}) => {
    const [data, error] = useFetch(peticion);

    {if(error) return <h2>{JSON.stringify(error)}</h2>}
    {if(!data || data.length < 1) return <h2 className="s-center">No se encontraron Cupcakes</h2>}

    return (
    <section className="l-section">
      {titulo && <h1 className="s-center">Cupcakes Gallery</h1>}
      <div className="ed-grid s-grid-1 m-grid-2 lg-grid-3 row-gap">
        {
          data ? (
            data.map(({
                id,
                descripcion, 
                sabor, 
                precio, 
                url, 
                color
            }) => {
                return (<Cupcake
                    key= {id}
                    descripcion = {descripcion}
                    sabor = {sabor}
                    precio = {precio}
                    url = {url}
                    color = {color}
                >
                </Cupcake>)
            })) : <h1>Loading...</h1>
        }
      </div>
    </section>
  );
};

export default Cupcakes;
