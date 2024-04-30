import './App.css';

import Agenda from './components/Agenda'; 
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
        <Header/>
        <Agenda/>
        <Footer/>
    </div>
  );
}

export default App;
