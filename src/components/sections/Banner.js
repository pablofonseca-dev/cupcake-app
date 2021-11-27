import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="diagonal dark-color main-banner img-container"
      id="main-banner"
    >
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Cupcake Shop</p>
            <p>Creada por: Pablo Fonseca</p>
            <Link to="/cupcakes" className="button first-color">
              Comprar Cupcakes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
