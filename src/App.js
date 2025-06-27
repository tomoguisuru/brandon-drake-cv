import './App.css';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="main-content">
          <div className="left-column">
            <Contact />
            <Skills />
            <Education />
          </div>
          <div className="right-column">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
