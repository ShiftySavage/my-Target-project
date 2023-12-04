import React, { Component } from "react";
import {
      Route, Routes,
      NavLink,
      HashRouter
    } from "react-router-dom";
    import Home from "./Home";
    import Electronics from "./Electronics";
    import Locker from "./Locker";
 
    class Main extends Component {
        render() {
          return (
            <HashRouter>
              <div>
                <h1>Target</h1>
                <ul className="header">
                  <li><NavLink exact to="/">Home Page</NavLink></li>
                  <li><NavLink to="/electronics">Electronics</NavLink></li>
                  <li><NavLink to="/locker">Locker</NavLink></li>
                </ul>
                <div className="content">
                <Routes>
                  <Route exact path="/" element={<Home />}/>
                  <Route path="/electronics" element={<Electronics />}/>
                  <Route path="/locker" element={<Locker />}/>
                </Routes>
                </div>
              </div>
            </HashRouter>
          );
        }
      }
 
export default Main;