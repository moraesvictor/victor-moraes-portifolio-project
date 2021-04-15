import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Contacts from './pages/Contacts';
import Portifolio from './pages/Portifolio';
function Routes() {
  return (
    <>
    <BrowserRouter>
   <Switch>
   <Route exact path="/" component= {Home} />
   <Route path="/aboutme" component= {AboutMe} />
   <Route path="/contacts" component= {Contacts} />
   <Route path="/portifolio" component= {Portifolio} />
   </Switch>
   </BrowserRouter>
    </>
  );
}

export default Routes;
