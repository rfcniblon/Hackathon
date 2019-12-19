import React from 'react';
import './Home.css';
import {NavLink} from 'react-router-dom';



class Home extends React.Component {

    openRules = () => {
        
        let rulesSheet = document.getElementsByClassName('rules')[0];
        console.log(rulesSheet.style.display);
        if (rulesSheet.style.display === 'none') {            
            rulesSheet.style.display = 'flex';
         } else {
            rulesSheet.style.display = 'none';
         }
        }

    closeRules = () =>{

        let rulesSheet = document.getElementsByClassName('rules')[0];

        if (rulesSheet.style.display === 'flex') {
            rulesSheet.style.display = 'none';
        }else{
            rulesSheet.style.display = 'flex';
            
        }
    }
    render() {
        return(
    
            <div className = "homeMain">
                <div className = "titleBorder">
                <h1 className = "homeTitle">ESCAPE SITE</h1>
                </div>
                <div className = "homeMenu">
                    <div className = "buttonBorder demo">
                    <button className = "homeButton" onClick={this.openRules}>Demo</button>
                    </div>
                    <div className = "buttonBorder">
                    <button className = "homeButton">Level 1</button>
                    </div>
                    <div className = "buttonBorder">
                    <button className = "homeButton">Level 2</button>
                    </div>
                    <div className = "buttonBorder">
                    <button className = "homeButton">Level 3</button>
                    </div>
                </div>
                <div className = "rules" style={{display: 'none'}}>
                    <p>Règles du Jeu</p>
                    <ul>
                        <li>Le site tu observeras</li>
                        <li>Ton cerveau tu utiliseras</li>
                        <li>La solution tu trouveras</li>
                        <li>Trois minutes tu auras</li>
                        <li>Aucune aide on ne te prodiguera</li>
                    </ul>
                    <div className= "startButtonBorder">
                        <button className="startButton" onClick={this.closeRules}>Commencer la partie</button>
                    
                    </div>
                </div>
                <p className= "footer">Merci De Vinci! (et WCS aussi!)</p>
            </div>)
    }
}

export default Home;