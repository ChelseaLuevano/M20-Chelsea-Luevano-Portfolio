// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import AboutMe from './components/pages/AboutMe'
import Portfolio from './components/pages/Portfolio'
// import ContactMe from './components/ContactMe'
// import Resume from './components/Resume'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import PortfolioContainer from './components/PortfolioContainer'


function App() {
  return (
    <Router className="mainPage">
      
      
      <PortfolioContainer />
    </Router>
  );
}

export default App;
