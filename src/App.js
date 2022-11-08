import './App.css';
import './components/Banner/Banner.css'
// Components

import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Banner />
      <Services />
    </div>
  );
}

export default App;
