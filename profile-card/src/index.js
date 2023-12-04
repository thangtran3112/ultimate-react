import ReactDOM from "react-dom/client";
import React from "react";
import "./style.css";

const skills = [
  {
    name: "Html+CSS",
    color: "yellow",
  },
  {
    name: "Angular",
    color: "red",
  },
  {
    name: "Javascript",
    color: "green",
  },
  {
    name: "WebDesign",
    color: "cyan",
  },
  {
    name: "React",
    color: "orange",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar photoPath="avatar/emily.jpg" name="Emily" />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList list={skills} />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src={props.photoPath} alt={props.name} className="avatar"></img>;
}

function Intro() {
  return (
    <main>
      <h1>Emily Tran</h1>
      <p>
        Full stack developer and teacher at Udemy. When not coding or preparing
        a course, I would like to play board games, to cook and eat , or to just
        enjoy the sun at the beach.
      </p>
    </main>
  );
}

function SkillList() {
  return (
    <>
      <div className="skill-list">
        {skills.map((skill) => {
          return <Skill name={skill.name} color={skill.color} />;
        })}
      </div>
    </>
  );
}

function Skill(props) {
  return (
    <p
      className="skill"
      style={{
        backgroundColor: props.color,
      }}
    >
      {props.name}
    </p>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
