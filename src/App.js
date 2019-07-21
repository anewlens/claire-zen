import React, {useState} from 'react';
import './Styles/App.scss';

import Separator from './Components/Separator'
import Nav from './Components/Nav'
import About from './Components/About'
import Work from './Components/Work'
import Contact from './Components/Contact'

const App = () => {

  const [position, setPosition] = useState(window.pageYOffset)

  document.addEventListener('scroll', () => setPosition(window.pageYOffset))
  
  return (
    <div className="App">
      <Nav position={position}/>
      <About />
      <Separator image='desert 1.jpg'/>
      <Work />
      <Separator image='desert 2.jpg'/>
      <Contact />
      <Separator image='desert 3.jpg'/>
    </div>
  );
}

export default App;
