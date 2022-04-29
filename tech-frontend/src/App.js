import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListTechComponent from './components/ListTechComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateTechComponent from './components/CreateTechComponent';
import UpdateTechComponent from './components/UpdateTechComponent';
import ViewTechComponent from './components/ViewTechComponent';
//import { connect } from 'react-redux';

function App() {

  return (

    <div >
      <Router>
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route  path = "/"   exact  component = {ListTechComponent}></Route>
              <Route  path = "/tech"  component = {ListTechComponent}></Route>
              <Route  path = "/add-tech/:techid"  component = {CreateTechComponent}></Route>
              <Route  path = "/view-tech/:techid"  component = {ViewTechComponent}></Route>
              {/* <Route  path = "/update-tech/:techid"  component = {UpdateTechComponent}></Route> */}
            </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>


  );
}

export default App;
