import React from 'react';
import Feature from './Components/Feature';
import Header from './Components/Header';
import About from './Components/About';
import Presentation from './Components/Presentation';
import Contact from './Components/Contact';
import ABout_Image from './images/about.png';
import ABout_Download_Img from './images/download.png';

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About image={ ABout_Image } title="Comes With All You Need For Daily Life" button_text="Get Tha App" />
      <Presentation title="UI Presentation" section_content="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
      <About image={ ABout_Download_Img } title="Download And Get Tha App Now" button_text="Download App" />
      <Contact />
    </div>
  );
}

export default App;
