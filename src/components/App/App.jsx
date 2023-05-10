import React from "react";
import "./App.scss";
import Header from "../Header/Header";
import AppRouter from "../AppRouter/AppRouter";
import Footer from "../Footer/Footer";
const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <AppRouter />
      </main>
      <Footer />
    </>
  );
};

export default App;
