import { useEffect, useState } from "react";
import "./App.css";
import Typed from "typed.js";
import Card from "./components/Card";

function App() {
  const [text, setText] = useState([
    `Hi, my name is Ralph! I'm a fullstack developer.`,
  ]);
  useEffect(() => {
    window.addEventListener("load", () => {
      let typed = new Typed("#banner", {
        strings: [
          `Hi, my name is Ralph! I'm a fullstack developer.`,
          ...text,
          "I like to party",
        ],
        typeSpeed: 30,
      });
    });
    // return () => typed.destroy();
  }, [text]);

  return (
    <>
      <div
        className="shadow-lg rounded bg-light p-5"
        style={{ textAlign: "center" }}
      >
        <h1 id="banner"> </h1>
      </div>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-sm">
            <Card
              title="Project 1"
              url="https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png"
            />
          </div>
          <div className="col-sm">
            <Card
              url="https://cdn.bulbagarden.net/upload/7/73/004Charmander.png"
              desc="This is the best project ever!"
            />
          </div>
          <div className="col-sm">
            <Card url="http://static.pokemonpets.com/images/monsters-images-800-800/7-Squirtle.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
