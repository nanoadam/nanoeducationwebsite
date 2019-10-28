import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Components/Views/Home";
import Posts from "./Components/Views/Posts";
import PostPage from "./Components/Views/PostPage";
import Contact from "./Components/Views/Contact";
import Login from "./Components/Views/Login";
import AddPost from "./Components/Views/AddPost";

import Navbar from "./Components/Navbar";

import "./App.css";

import * as firebase from "firebase";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/posts" component={Posts} exact />
            <Route path="/posts/:id" component={PostPage} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/add" component={AddPost} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
