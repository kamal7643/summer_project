import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';



// screens 
import LandingPage from './Screens/landingPage';
import Ranks from './Screens/Ranks';
import NotFound from './Screens/NotFound';
import Test from './Screens/TestForBackend';
import Notifications from './components/Notifications';


// player side
import VideoPlateform from './playerSide/videos/VideoPlateform';
import Suggestion from './playerSide/Suggestion';
import ProfileWall from './playerSide/ProfileWall';
import Events from './playerSide/Events';
import Login from './playerSide/login';
import SignUp from './playerSide/Signup';
import Profile from './playerSide/Profile/Profile';


// admin side
import AdminEvents from './adminSide/Event';
import Admin from './adminSide/Admin';
import AdminSuggestion from './adminSide/Suggestion';



//css
import './css/global.css';


ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact={true} component={LandingPage} />
      <Route path="/ranks" exact={true} component={Ranks} />
      <Route path="/events" exact={true} component={Events} />
      <Route path="/videos" exact={true} component={VideoPlateform} />
      <Route path="/suggestion" exact={true} component={Suggestion} />
      <Route path="/profileWall" exact={true} component={ProfileWall}/>
      <Route path="/profile" exact={true} component={Profile}/>
      <Route path="/notifications" exact={true} component={Notifications}/>
    
      <Route path="/testfirebase" exact={true} component={Test}/>
      <Route path="/login" exact={true} component={Login}/>
      <Route path="/signup" exact={true} component={SignUp}/>
    
      {
        //godmode
      }
      <Route path="/admin" exact={true} component={Admin}/>
      <Route path="/admin/suggestion" exact={true} component={AdminSuggestion}/>
      <Route path="/admin/events" exact={true} component={AdminEvents}/>
      <Route path="/404" exact={true} component={NotFound} />
      </Switch>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
