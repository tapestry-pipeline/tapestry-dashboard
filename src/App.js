import React from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.js";
import Home from "./components/Home.js";
import Snowflakedbt from "./components/Snowflakedbt.js";
import Documentation from "./components/Documentation.js";
import AirbytePage from "./components/AirbytePage.js";
import GrouparooPage from "./components/GrouparooPage.js";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full h-screen overflow-y-auto py-8 px-14">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/airbyte" component={AirbytePage} />
          <Route exact path="/snowflakedbt" component={Snowflakedbt} />
          <Route exact path="/grouparoo" component={GrouparooPage} />
          <Route exact path="/documentation" component={Documentation} /> 
        </Switch>
      </main>
    </div>
  );
}

export default App;
