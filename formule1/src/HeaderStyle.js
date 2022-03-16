import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor:"grey",
  },
  nav: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  logo: {
    height: 70,
    width: 100,
    padding: 4,
  },
  title: {
    margin: 0,
    fontSize: 20,
  },
});

export default useStyles;
