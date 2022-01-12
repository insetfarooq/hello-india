import ListEmployeeComponents from "./components/ListEmployeeComponents";
import HeaderComponents from "./components/HeaderComponents";
 import FooterComponents from "./components/FooterComponents";
import AddEmployee from "./components/AddEmployee";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponents />
      <div className="container">
        <Switch>
          <Route exact path = "/" component={ListEmployeeComponents} />
          <Route path = "/employees" component={ListEmployeeComponents} />
          <Route path="/add-employee" component={AddEmployee} />
          <Route path="/edit-employee/:id" component={AddEmployee} />
       </Switch>
     </div>
      <FooterComponents />
     </Router>
    </div>
  );
}

export default App;
