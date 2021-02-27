
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Approute from './components/Approute';
import Navigation from './components/Navigation';
import Footer from './components/Footer';


function App() {
  return (

      <>
          <Router>
            <Navigation/>
            <Approute/> 
            <Footer/>
          </Router>
          
      </>
        
  );
}

export default App;
