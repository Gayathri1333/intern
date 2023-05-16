
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import CardEvent from './CardEvent';
import Forget from './Forget';
import Image1 from './Image1';
import Image2 from './Image2';
import Image3 from './Image3';
import NotFound from './NotFound';
import ScrollToTop from './ScrollToTop';
import ClueEvents from './ClueEvents';
import ClueCard from './ClueCard';
import AdminHome from './AdminHome';
function App() {
  return(
    <BrowserRouter>
        <ScrollToTop/>
        <Switch>
          {/* <Mapper/> */}
          <Route exact path="/https://tubular-babka-2e3dc7.netlify.app/" component={Home}/>
          <Route exact path="/https://tubular-babka-2e3dc7.netlify.app/user" component={AdminHome}/>
          <Route exact path="/https://tubular-babka-2e3dc7.netlify.app/register" component={Register}/>
          <Route exact path="/https://tubular-babka-2e3dc7.netlify.app/login" component={Login}/>
          <Route exact path="/https://tubular-babka-2e3dc7.netlify.app/user/games" component={CardEvent}/>
          <Route exact path="/https://tubular-babka-2e3dc7.netlify.app/user/schoollife" component={Image1}/>
          <Route exact path="/https://tubular-babka-2e3dc7.netlify.app/user/sweethome" component={Image2}/>
          <Route exact path="/allclues" component={ClueEvents}/>
          <Route exact path="/clue/:id" component={ClueCard}/>
          <Route exact path="/https://tubular-babka-2e3dc7.netlify.app/user/sevenwonders" component={Image3}/>
          <Route exact path="/https://tubular-babka-2e3dc7.netlify.app/forget" component={Forget}/>
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
}
export default App;
