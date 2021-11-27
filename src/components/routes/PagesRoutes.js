import { Route, Routes } from "react-router-dom";
import AboutUs from "../pages/aboutUs";
import Cupcakes from "../pages/cupcakes";
import Home from "../pages/home";

const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/cupcakes" element={<Cupcakes peticion='cupcakes' titulo></Cupcakes>}></Route>
      <Route path="/nosotros" element={<AboutUs></AboutUs>}></Route>
    </Routes>
  );
};


export default PagesRoutes; 
