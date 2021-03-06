import { useEffect, useState } from "react";
import "./App.css";
import Typed from "typed.js";
import Card from "./components/Card";
import image1 from "./images/project1pic.PNG";
import image2 from "./images/ParcItHomePage.PNG";

function App() {
  const projects = [
    {
      title: "Project1",
      url: image1,
    },
    {
      title: "ParcItHomePage",
      url: image2,
    },
  ];
  const [text, setText] = useState(
    `Hi, my name is Ralph! I'm a fullstack developer.`
  );

  useEffect(() => {
    window.addEventListener("load", () => {
      let typed = new Typed("#banner", {
        strings: [
          `Hi, my name is Ralph! I'm a fullstack developer.`,
          text,
          `All of these projects I completed over the Bootcamp`,
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
          {projects.map((project, i) => (
            <div className="col" key={i}>
              <Card
                title={project.title}
                url={project.url}
                desc={project.desc}
              />
            </div>
          ))}
          {/* <div className="col-sm">
            <Card title="Project 1" url={image1} />
          </div>
          <div className="col-sm">
            <Card
              url="Cardview.jpg"
              desc="This is my teams Project! Parc-It "
            />
          </div>
          <div className="col-sm">
            <Card url="HomePage.jpg" desc="This is Parc-It Home page" />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
