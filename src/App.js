import React, {useState} from 'react';
import './Styles/App.scss';

import Separator from './Components/Separator'
import Nav from './Components/Nav'
import About from './Components/About'
import Work from './Components/Work'
import Contact from './Components/Contact'

import './Styles/MediaQueries.scss'

const App = () => {

  const [position, setPosition] = useState(window.pageYOffset)

  document.addEventListener('scroll', () => setPosition(window.pageYOffset))
  
  return (
    <div className="App">
      <Nav position={position}/>
      <About />
      <Separator image='desert 1.jpg'/>
      <Work />
      <Contact />
      <Separator 
        image='desert_4.jpg' />
    </div>
  );
}

export default App;
