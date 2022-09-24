import React from "react";
import styles from "./App.module.scss";
import { Header } from "./components/Header";
import { RoutesApp } from "./components/routes";
import "./styles/global.scss";
const App = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <RoutesApp />
    </div>
  );
};

export default App;
