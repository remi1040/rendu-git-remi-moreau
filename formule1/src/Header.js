import logo from './F1.png';
import { Link } from "react-router-dom";

import useStyles from "./HeaderStyle";

function Header() {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <img className={classes.logo} src={logo} alt="F1 log" />
      <h1 className={classes.title}>Formule 1</h1>
      <nav className={classes.nav}>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default Header;