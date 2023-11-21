import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import noeud from './img/noeud.png';

function Tile(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    function toogle() {
      var a = new Date();
      var b = new Date(2023, 11, props.jour, 12, 0, 0, 0);
      if (b-a < 0)
        setIsFlipped(!isFlipped)
    }

  return (
    <div className='tileContainer'>
        <img src={noeud} alt="noeud" className={'noeud ' + (isFlipped ? "z-index" : "")} onClick={() => toogle()}/>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <li className="front" onClick={() => toogle()}>{props.jour}</li>
            <li className="back" >
              <img className='tileImg' src={require('./img/days/' + props.jour + '.png')} alt={'Erreur chargement jour ' + props.jour}/>
            </li>
        </ReactCardFlip>
    </div>
  );
}

export default Tile;