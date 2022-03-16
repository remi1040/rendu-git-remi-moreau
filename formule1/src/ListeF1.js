import classNames from "classnames";
import data from "./data.json";
import { Link } from "react-router-dom";
//import new_data from "./new_data.json";

import useStyles from "./ListeF1Style";
import Season from "./Season";
//import Card from "./Card";

function VerticalList({className }) { 
  const classes = useStyles();
  //const y = data.annee.an;
   
  return (
      <ul className={classNames([classes.root, className])}>
        {data.map((entry) => (
        <li key={entry} className={classes.item}>
          <Link to={`/seasons/${entry}`} className={classes.link}>
            <h2 className={classes.title} >{entry}</h2>
          </Link>
        </li>
      ))}
         
      </ul>
       
  );
}

export default VerticalList;