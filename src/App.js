import './App.css';
import './components/Banner/Banner.css'
// Components

import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import Switcher from './components/Switcher/Switcher';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <Services />
      <Switcher />
      <Footer />
    </div>
  );
}

export default App;
