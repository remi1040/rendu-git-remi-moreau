import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 16,
    backgroundColor:"darkgrey",
  },
  list: {
    marginTop: 32,
  },
});

export default useStyles;
