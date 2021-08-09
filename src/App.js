import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Password from "./Password";
import Email from "./Email";
import Articles from './Articles';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            {/* <Route exact path="/">
              <Home />
            </Route> */}
            <Route path="/password">
              <Password />
            </Route>
            <Route path="/email">
              <Email />
            </Route>
            <Route path="/articles">
              <Articles />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
