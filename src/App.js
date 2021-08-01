import React from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.js";
import Home from "./components/Home.js";
import Snowflakedbt from "./components/Snowflakedbt.js";
import Documentation from "./components/Documentation.js";
import MonitorPage from "./components/MonitorPage.js";

function App() {
    return (
      <div className="flex flex-no-wrap h-screen">
        <Sidebar /> 
        <main className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/airbyte">
              <MonitorPage toolTitle="airbyte" />
            </Route>
            <Route exact path="/snowflakedbt" component={Snowflakedbt} />
            <Route exact path="/grouparoo">
              <MonitorPage toolTitle="grouparoo" />
            </Route>
            <Route exact path="/documentation" component={Documentation} /> 
          </Switch>
        </main>
      </div>
    );
}

export default App;
