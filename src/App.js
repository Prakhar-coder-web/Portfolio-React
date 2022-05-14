import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Experience from './Components/Experience';
import About from './Components/About';
import Testimonial from './Components/Testimonial';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contacts from './Components/Contacts';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Experience />
      <About />
      <Testimonial />
      <Projects />
      <Skills />
      <Contacts />
    </div>
  );
}

export default App;
