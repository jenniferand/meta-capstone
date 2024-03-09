import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Hero from './components/Hero'

function App() {
  return (
    <div className="grid-container">
      <Header className="header"/>
      <Hero/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
