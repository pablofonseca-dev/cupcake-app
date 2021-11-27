import "../styles/App.scss";
import "../styles/styles.scss";

import Header from "./sections/Header";
import PagesRoutes from "./routes/PagesRoutes";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header></Header>
      <PagesRoutes></PagesRoutes>
    </Router>
  );
}

export default App;
