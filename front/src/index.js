import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterContainer from "./containers/Register";
import HomePageContainer from "./containers/HomePage";

function HomePage() {
  return (
    <div>
      <h1>Accueil</h1>
      <p>Bienvenue sur notre site web !</p>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h1>A propos</h1>
      <p>Nous sommes une entreprise spécialisée dans ...</p>
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/register" element={<RegisterContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));