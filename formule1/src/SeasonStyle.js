import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    padding: 16,
  },
  grand_prix: {
    display: "flex",
    alignItems: "flex-end",
    float:"left",

  },
  li: {
    listStyleType: "none",
    textAlign:"center",
    width:"auto",
    backgroundColor:"Cornsilk",
    border: "1px solid #333",
    
  },
  titre: {
    listStyleType: "none",
    color:"red",
    border:"2px solid #333",
    textAlign:"center",
  },
  resultat: {
    listStyleType: "none",
    textAlign:"center",
    float:"right",
    paddingRight:200,
    paddingTop:100,
  }
  
});

export default useStyles;