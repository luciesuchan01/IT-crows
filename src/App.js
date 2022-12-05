import './App.css';
import './components/Banner/Banner.css'
// Components
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import Switcher from './components/Switcher/Switcher';
import Footer from './components/Footer/Footer';
import React from 'react'
import { Header, Our_work_cases } from './components/common'
import { Cases } from './components/common'
import { About_us } from './components/common'
import { Meet_us } from './components/common'
import { Slider } from './components/common'
import { Good_work } from './components/common'
import { Banner_services } from './components/common'
import { Services_page_nav } from './components/common'
import { Services_page_services } from './components/common'
import { Services_page_services_app } from './components/common'
import { Services_page_services_custom } from './components/common'

import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" >
          <Header />,
          <Banner />,
          <Cases />,
          <Services />,
          <About_us />,
          <Switcher />,
          <div className='footer-main'>
          <Footer />
          </div>
        </Route>
      
        <Route exact path="/about_us">
          <Header />,
          <Meet_us />,
          <Slider />,
          <Good_work/>,
          <div className='footer-about-us'>
            <Footer />
          </div>
          
          

        </Route>

        <Route exact path="/our_work">
          <Header />,
          <Our_work_cases/>,
          <div className='footer-our-work'>
            <Footer/>
          </div>
        </Route>

        <Route exact path="/services">
          <Header />
          <Banner_services />
          <Services_page_nav />
          <Services_page_services />
          <Services_page_services_app/>
          <Services_page_services_custom/>
          
          <div className='footer-services'>
            <Footer/>
          </div>
        </Route>

        <Route exact path="/career">
          <Header />
        </Route>

        <Route exact path="/contact">
          <Header />
        </Route>

      </Switch>

    </div>

  );
}

export default App;
