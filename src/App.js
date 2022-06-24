import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Videos from './pages/Videos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route
      path="/"
      element={<Home/>}
    />
      <Route
      path="/Home"
      element={<Home/>}
    />
      <Route
      path="/Projects"
      element={<Projects/>}
    />
      <Route
      path="/Videos"
      element={<Videos/>}
    />
      <Route
      path="/About"
      element={<About/>}
    />
      <Route
      path="/Contact"
      element={<Contact/>}
    />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
