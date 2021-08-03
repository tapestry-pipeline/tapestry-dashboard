import React from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.js";
import Home from "./components/Home.js";
import Snowflakedbt from "./components/Snowflakedbt.js";
import Documentation from "./components/Documentation.js";
import MonitorPage from "./components/MonitorPage.js";

function App() {
    return (
      <div className="flex flex-nowrap h-screen">
        <Sidebar />
        <main className="col-span-4 container mx-0 py-10 h-64 md:w-screen w-screen px-6 h-screen grid grid-cols-2 grid-rows-3">
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
