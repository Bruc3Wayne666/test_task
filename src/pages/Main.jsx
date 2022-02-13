import React from 'react';
import logo from "../assets/to-do-list.png";
import classes from "../styles/pages/MainPage.module.css"

const Main = () => {
    return (
      <div className={classes.mainPage}>
          <div>
              <h1 className={classes.title}>ToDo</h1>
              <h3 className={classes.description}>ToDo is the best way to manage your dreams</h3>
          </div>
          <div>
              <img src={logo} alt=""/>
          </div>
      </div>
    );
};

export default Main;