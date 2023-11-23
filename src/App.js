import './App.css';
import bg from './img/image.png';
import tiles from './data/messages_lamie.json';
import SnowFall from 'react-snowfall';
import Tile from './Tile.js'

function App() {

  return (
    <div className="App">
      <SnowFall
        radius={[3, 10]}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}/>
      <article> 
        <h1>Pourquoi je t'aime ? <sub>(et quelques autres surprises)</sub></h1> 
        <div className="bg-holder" style={{ backgroundImage: `url(${bg})` }}>
          <ul id="adventDoors">
            {tiles.map(tile => {
              return <Tile jour={tile.jour}/> 
            })}
          </ul>
        </div>
      </article>
    </div>
  );
}

export default App;
