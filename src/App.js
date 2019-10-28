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

export const fire = firebase.initializeApp({
  apiKey: "AIzaSyA0xKY1a5QMdBwPzq5ZZObDGY0pxciorXI",
  authDomain: "nano-edu-main.firebaseapp.com",
  databaseURL: "https://nano-edu-main.firebaseio.com",
  projectId: "nano-edu-main",
  storageBucket: "nano-edu-main.appspot.com",
  messagingSenderId: "270063933250",
  appId: "1:270063933250:web:a26f116eb63269c9c75adb"
});

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
