import './App.css';
import './components/Banner/Banner.css'
// Components
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import Switcher from './components/Switcher/Switcher';
import Footer from './components/Footer/Footer';
import React from 'react'
import { Custom_soft, Design_page_nav, Header, Our_work_cases, Webpages_design, Web_dev } from './components/common'
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
import { Services_page_webpages } from './components/common'
import { BrowserRouter as Route, Switch} from "react-router-dom"
import { Artificial_intelligence } from "./components/common"
import { Form } from "./components/common"
import { Banner_graciano } from "./components/common"
import { About_graciano } from "./components/common"
import { Project_task } from "./components/common"
import { Solution } from "./components/common"
import { Responsive } from "./components/common"
import { Header_sec } from "./components/common"
function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" >
          <Header />,
          <Banner />,
          <Services />,
          <Cases />,
          <About_us />,
          <div className='switcher-main'>
            <Switcher />,
          </div>
          
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

        <Route exact path="/services_development">
          <Header />
          <Banner_services />
          <Services_page_nav />
          <Services_page_services />
          <Services_page_services_app/>
          <Services_page_services_custom/>
          <Services_page_webpages />
          <Artificial_intelligence />
          <div className='switcher-services'>
            <Switcher/>,
          </div>
          <div className='footer-services'>
            <Footer/>
          </div>
        </Route>

        <Route exact path="/career">
          <Header />
        </Route>

        <Route exact path="/contact">
          <Header />,
          <Form />
        </Route>
        <Route exact path="/services_design">
          <Header />,
          <Banner_services />,
          <Design_page_nav/>,
          <Web_dev/>,
          <Custom_soft/>,
          <Webpages_design/>,
          <div className='switcher-services-sec'>
            <Switcher/>,
          </div>
          <div className='footer-services-sec'>
            <Footer/>
          </div>
        </Route>
        <Route exact path="/graciano">
          <div className='header-graciano'>
            <Header_sec />
          </div>
          <Banner_graciano/>,
          <About_graciano/>,
          <Project_task/>,
          <Solution/>,
          <Responsive/>,
         <div className='footer-graciano'>
          <Footer/>,
         </div>
        </Route>

      </Switch>

    </div>

  );
}

export default App;
