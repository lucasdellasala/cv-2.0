import { List } from './components/List.jsx'
import { constantes } from './constantes.js'
import profilePic from './images/izzy.jpg'
import { SocialMedia } from './components/SocialMedia.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='profilePicCol'>
        <img src={profilePic} alt='Izzy Digimon Profile Pic' className='profilePic'/>
        <a class='thanks' href='https://www.noelbellett.com/'>Thanks to Noel Bellett</a>
        <SocialMedia theme='dark'/>
      </div>
      <div className="infoCol">
        <h1 className='title'>Lucas Della Sala</h1>
        <h3>Backend Dev | Student of Computer Science and Economics (UBA)</h3>
        <div class="container">
          <h2>👷‍♂️Experience</h2>
          <List items={constantes.jobs}/>
        </div>
        <div class="container">
          <h2>🐦Freelos</h2>
          <List items={constantes.freelos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
