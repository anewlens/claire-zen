import React, {useState} from 'react';
import './Styles/App.scss';

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
      <Work />
      <Contact />
    </div>
  );
}

export default App;
