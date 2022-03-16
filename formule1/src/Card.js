import useStyles from "./CardStyle";

function Card(title) {
  //const imageURL = `http://ergast.com/api/f1/seasons`;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h5 className={classes.title}>toto</h5>
    </div>
  );
}

export default Card;
