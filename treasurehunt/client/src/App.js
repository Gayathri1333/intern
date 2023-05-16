
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
import UserHome from './UserHome';
import AdminCardEvent from './AdminCardEvent';
import GameCard from './GameCard';
import AdminImage1 from './AdminImage1';
import AdminImage2 from './AdminImage2';
import AdminImage3 from './AdminImage3';
function App() {
  return(
    <BrowserRouter>
        <ScrollToTop/>
        <Switch>
          {/* <Mapper/> */}
          <Route exact path="/" component={Home}/>
          <Route exact path="/admin" component={AdminHome}/>
          <Route exact path="/user" component={UserHome}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/user/games" component={CardEvent}/>
          <Route exact path="/admin/games" component={AdminCardEvent}/>
          <Route exact path="/user/schoollife" component={Image1}/>
          <Route exact path="/user/sweethome" component={Image2}/>
          <Route exact path="/admin/schoollife" component={AdminImage1}/>
          <Route exact path="/admin/sweethome" component={AdminImage2}/>
          <Route exact path="/admin/sevenwonders" component={AdminImage3}/>
          <Route exact path="/allclues" component={ClueEvents}/>
          <Route exact path="/clue/:id" component={ClueCard}/>
          <Route exact path="/user/sevenwonders" component={Image3}/>
          <Route exact path="/forget" component={Forget}/>
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
}
export default App;
