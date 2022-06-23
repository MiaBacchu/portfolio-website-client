import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import MyProjects from './pages/MyProjects';
import Videos from './pages/Videos';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Contact></Contact>
      <MyProjects></MyProjects>
      <Videos></Videos>
      <Footer></Footer>
    </div>
  );
}

export default App;
