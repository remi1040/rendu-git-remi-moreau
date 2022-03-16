//import logo from './F1.png';
import './App.css';
//import {createUseStyles } from "react-jss";
import {BrowserRouter,Route,Routes} from "react-router-dom";

import Home from "./Home";
import Header from "./Header";
import Season  from './Season';

function App() {
  //const classes = useStyles();
  return (
    <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seasons/:id" element={<Season  />} />
      </Routes>
    </main>
  </BrowserRouter>
  );
}

export default App;
