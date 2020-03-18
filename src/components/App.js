import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'
import Main from './Main'
import Aside from './Aside'
import Aside2 from './Aside2'
import Aside3 from './Aside3'
import Aside4 from './Aside4'
import Aside5 from './Aside5'
import Aside6 from './Aside6'
import Footer from './Footer'
import Treningi from '../pages/Treningi'
import Kyokushin from '../pages/Kyokushin'
import Egzamin from '../pages/Egzamin'
import Galeria from '../pages/Galeria'
import Kontakt from '../pages/Kontakt'
import Cover from './Cover'
import '../styles/App.css';

class App extends React.Component {

  render() {
    return (
      //Ustawienia BrowserRouter by podstrony działały?
      <HashRouter
        basename="/"
      >
        <Cover />
        <div className="App">
          <div className="wrapApp">
            <Header />
            <div className='main'>
              <Navigation />
              <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/treningi' component={Treningi} />
                <Route path='/kyokushin' component={Kyokushin} />
                <Route path='/egzamin' component={Egzamin} />
                <Route path='/galeria' component={Galeria} />
                <Route path='/kontakt' component={Kontakt} />
                <Route component={Main} />
              </Switch>
              {/* Route Aside */}
              <Switch>
                <Route exact path='/' component={Aside} />
                <Route path='/treningi' component={Aside2} />
                <Route path='/kyokushin' component={Aside3} />
                <Route path='/egzamin' component={Aside4} />
                <Route path='/galeria' component={Aside5} />
                <Route path='/kontakt' component={Aside6} />
                <Route component={Aside} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App;
