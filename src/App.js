import React from "react";
import { Route } from "react-router";
import { Layout } from "./Components/Layout";
import Editor from "./Components/Editor";
import Landingpage from "./Components/landingpage";
import "./App.css";

function App() {
  return (
    <Layout>
      <Route exact path="/" component={Landingpage} />
      <Route path="/Editor" component={Editor} />
    </Layout>
  );
}

export default App;
