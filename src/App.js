import "./App.css";
import Header from "./Mycomponent/Header";
import { Footer } from "./Mycomponent/Footer";
import { Doit } from "./Mycomponent/Doit";
import { AddTodo } from "./Mycomponent/AddTodo";
import { About } from "./Mycomponent/About";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("doit") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("doit"));
  }

  const onDelete = (doit) => {
    console.log("I am ondelete od doit", doit);
    setDoit(
      doit.filter((e) => {
        return e !== doit;
      })
    );
    localStorage.getItem("doit", JSON.stringify(doit));
  };
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (doit.length === 0) {
      sno = 0;
    } else {
      sno = doit[doit.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setDoit([...doit, myTodo]);
    console.log(myTodo);
  };
  const [doit, setDoit] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("doit", JSON.stringify(doit));
  }, [doit]);

  return (
    <>
    <Router>
      <Header title="The Todo list" searchBar={false} />
       <Switch>
      <Route exact path="/" exact render= {()=>{
        return(
          <>
          <AddTodo addTodo={addTodo} />
           <Doit doit={doit} onDelete={onDelete} />
           </>)
      }}>
         </Route>
          <Route exact path="/about">
            <About />
          </Route>        
        </Switch>    
      <Footer />
      </Router>
    </>
  );
}

export default App;
