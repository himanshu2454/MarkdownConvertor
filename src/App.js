import React from "react";
import { Route } from "react-router";
import { Layout } from "./Components/Layout";
import Editor from "./Components/Editor";
import "./App.css";

function App() {
  return (
    <Layout>
      <Route path="/" component={Editor} />
    </Layout>
  );
}

export default App;
