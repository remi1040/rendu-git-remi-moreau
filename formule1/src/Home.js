//import { useState } from "react";

//import Input from "./Input";
//import data from "./data.json";
import VerticalList from "./ListeF1";
import useStyles from "./HomeStyle";

function Home() {
  
  const classes = useStyles();
  //const [value, setValue] = useState("");
  //const onChange = (event) => setValue(event.target.value);
  
  return (
    <div className={classes.root}>
        <VerticalList className={classes.list} />
    </div>
  );
  
}

export default Home;
