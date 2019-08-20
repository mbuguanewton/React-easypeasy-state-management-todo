import React, { useEffect } from "react";
import model from "./model";
import Todos from "./components/Todos";
import Nav from "./components/Navbar";
import AddTodo from "./components/AddTodo";
import { StoreProvider, createStore } from "easy-peasy";
import { PageView, initGA } from "./components/googleTracking";
import { initPixel, TrackPageView } from "./components/facebookTracking";
import "./App.css";

const store = createStore(model);
const googleTrackingId = "UA-146062468-1";
const facebookTrackingId = 2168243083301885;

function App() {
  useEffect(() => {
    try {
      console.log("this portion is running");
      // initialising google analytics
      initGA(googleTrackingId);
      PageView();

      // initialising facebook pixel
      initPixel(facebookTrackingId);
      TrackPageView();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <StoreProvider store={store}>
      <Nav />
      <div className="container">
        <Todos />
        <AddTodo />
      </div>
    </StoreProvider>
  );
}

export default App;
