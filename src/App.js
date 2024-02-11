import './App.css';
import About from './components/About';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Introduction/>
      <About/>
      <Experience/>
      <Projects/>
      <Achievements/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
