import new_data from "./new_data.json";
import result from "./result.json";

import useStyles from "./SeasonStyle";


//const OVERVIEW_SIZE = 120;


function Season() {
  const classes = useStyles();
  const url_annees = window.location.href.split('/');
  const gp = [];
  const dt = [];
  const circ = [];
  const vill = [];
  const taille = new_data.annees[url_annees[4]][1].taille ;
  //console.log(taille);
  for (let i = 1; i < taille; i++) {
        //console.log(new_data.annees[url_annees[4]][i]);
        gp.push(new_data.annees[url_annees[4]][i].grand_prix);
        dt.push(new_data.annees[url_annees[4]][i].date);
        circ.push(new_data.annees[url_annees[4]][i].circuit);
        vill.push(new_data.annees[url_annees[4]][i].Ville);
        
        //content.innerHTML = "test";
        //container.appendChild(content);
  }
  
  const un = result.annees[url_annees[4]].premier;
  const deux = result.annees[url_annees[4]].deuxieme;
  const trois = result.annees[url_annees[4]].troisieme;
    
  

  console.log(un);
  console.log(deux);
  console.log(trois);

  

  return (
  <div>
    <div className={classes.grand_prix}>
      <ul>
        <li className={classes.titre}><h3>Nom du grand prix</h3></li>
        {gp.map(function(name, index){
                    return <li key={ index } className={classes.li}>{name}</li>;
                  })}
      </ul>
    </div>
    <div className={classes.grand_prix}>
      <ul>
        <li className={classes.titre}><h3>Date</h3> </li>
        {dt.map(function(name, index){
                    return <li key={ index } className={classes.li}>{name}</li>;
                  })}
      </ul>
    </div>
    <div className={classes.grand_prix}>
      <ul>
        <li className={classes.titre}><h3>Circuit</h3></li>
        {circ.map(function(name, index){
                    return <li key={ index } className={classes.li}>{name}</li>;
                  })}
      </ul>
    </div>
    <div className={classes.grand_prix}> 
      <ul>
        <li className={classes.titre}><h3>Ville/Pays</h3></li>
        {vill.map(function(name, index){
                    return <li key={ index } className={classes.li}>{name}</li>;
                  })}
      </ul>
    </div>
    <div className={classes.resultat}>
    <table>
    <thead>
        <tr>
            <th colSpan="3">Résultat championnat du monde</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className={classes.titre}><h5>Premier</h5></td>
            <td className={classes.titre}><h5>Deuxieme</h5></td>
            <td className={classes.titre}><h5>Troisieme</h5></td>
        </tr>
        <tr>
            <td className={classes.li}>{un}</td>
            <td className={classes.li}>{deux}</td>
            <td className={classes.li}>{trois}</td>
        </tr>
    </tbody>
    </table>
    </div>
  </div>
  );
}


export default Season;