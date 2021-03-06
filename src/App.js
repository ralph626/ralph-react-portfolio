import { useEffect, useState } from "react";
import "./App.css";
import Typed from "typed.js";
import Card from "./components/Card";
import image1 from "./images/project1pic.PNG";
import image2 from "./images/ParcItHomePage.PNG";
import image3 from "./images/linkedInMainPage.PNG";

function App() {
  const projects = [
    {
      title: "Lyrics You Now Know",
      url: image1,
      desc:
        "I am an aspiring full-stack developer. Eager to work hard and learn as much as possible.",
    },
    {
      title: "linkedInMainPage",
      url: image3,
      desc:
        "I am excited to work in the industry, I enjoy emerging myself in the field  and to continue learning new ways of creating applications of all kind. ",
    },
    {
      title: "ParcItHomePage",
      url: image2,
      desc:
        "I am inspired by what developers can accomplish and anything imagined can be created. ",
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
