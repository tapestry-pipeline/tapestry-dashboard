import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.js";
import Home from "./components/Home.js";
import Airbyte from "./components/Airbyte.js";
import Snowflake from "./components/Snowflake.js";
import Grouparoo from "./components/Grouparoo.js";
import Dbt from "./components/Dbt.js";
import Documentation from "./components/Documentation.js";

function App() {
    return (
        <Router>
            <div className="flex flex-no-wrap">
              <Sidebar /> 
              <main className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
                <Switch>
                  {/* <Route exact path="/" component={Home} />  */}
                  <Route exact path="/airbyte" component={Airbyte} /> 
                  <Route exact path="/snowflake" component={Snowflake} /> 
                  {/* <Route exact path="/grouparoo" component={Grouparoo} />  */}
                  <Route exact path="/dbt" component={Dbt} /> 
                  {/* <Route exact path="/documentation" component={Documentation} />  */}
                </Switch>
              </main>
            </div>
        </Router> 
    );
}

export default App;
