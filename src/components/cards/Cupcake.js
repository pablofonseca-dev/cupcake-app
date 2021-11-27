import { Fragment } from "react";
import {number, string} from 'prop-types'

const Cupcake = ({ descripcion, url, sabor, color, precio }) => {
  return (
    <Fragment>
      <article className="card s-shadow-bottom">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <img src={url} alt="Foto del Cupcake" />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <div className="s-main-center">
            <div className="s-bg-white s-pxy-2">
              <h3>Cupcake de {sabor}</h3>
              <p className="s-mb-0">{descripcion}</p>
            </div>
          </div>
        </div>
        <footer className="s-cross-center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">
          <div className="s-10 s-mr-1">
            <div className="circle">
              <img src="/images/cupcake.svg" />
            </div>
          </div>
          <p className="s-mb-0">Color {color}</p>

          <div className="button s-to-right">$ {precio}USD</div>
        </footer>
      </article>
    </Fragment>
  );
};

Cupcake.propTypes = {
  precio: number, 
  color: string.isRequired, 
  descripcion: string,
  sabor: string.isRequired, 
  url: string
}

Cupcake.defaultProps = {
  url: "/images/no-image.png", 
  precio: 0, 
}

export default Cupcake;
