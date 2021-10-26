import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Context from "./Context/Context";

import Home from "./Home";
import Profile from "./Profile";

const App = () => {
  const [pname, setPname] = useState("");
  const data = { pname, setPname };
  return (
    <Router>
      <Context.Provider value={data}>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route
              exact
              path="/profile"
              component={() => <Profile pname={pname} />}
            />
          </Switch>
        </div>
      </Context.Provider>
    </Router>
  );
};

export default App;
