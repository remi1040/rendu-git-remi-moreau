import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    margin: 2,
    padding: 2,
    justifyContent: "center",
    
  },
  item: {
    padding: 8,
    borderWidth: 1,
  },
  link: {
    textDecoration: "none",
  },
  title: {
    padding: 8,
    color: "white",
    fontSize: 20,
    textShadow: "1px 1px 6px black",
    wordBreak: "break-word",
  },
});

export default useStyles;
