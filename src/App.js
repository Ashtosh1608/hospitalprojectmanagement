import './App.css';
// import { Home } from './MyComponents/Home';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';
import { Welcome } from './Components/Welcome/Welcome';
import { Navbar } from './Components/Navbar/Navbar';
import { Form } from './Components/Form/Form';
import { Form2 } from './Components/Form/Form2';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Display } from './Components/Display/Display';
import { List } from './Components/List/List';


function App() {
  return (
    <div className="App">


      <Switch>
        <Route exact path="/" >
          <Form/>
          {/* <Form2/> */}
          
          
          {/* <Navbar/> */}
          {/* <Welcome /> */}
          {/* <Login /> */}

        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/home">
          {/* <Home /> */}
        </Route>
        <Route path="/navbar">
          {/* <Home /> */}
          <Navbar/>
        </Route>
        {/* <Route path="/bloodform">
          <Form/>
        </Route> */}
        <Route path="/oxygenform">
          <Form2/>
        </Route>
        <Route path="/display">
          <Display/>
        </Route>
        <Route path="/list">
          <List/>
        </Route>


      </Switch>

    </div>
  );
}

export default App;
