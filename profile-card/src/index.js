import ReactDOM from "react-dom/client";
import React from "react";
import "./style.css";

const skills = [
  {
    name: "Html+CSS",
    color: "pink",
    emoji: "👍",
  },
  {
    name: "Angular",
    color: "red",
    emoji: "👍",
  },
  {
    name: "Javascript",
    color: "green",
    emoji: "💪",
  },
  {
    name: "WebDesign",
    color: "cyan",
    emoji: "💯",
  },
  {
    name: "React",
    color: "orange",
    emoji: "👍",
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
          const { name, color, emoji } = skill;
          return <Skill name={name} color={color} emoji={emoji} />;
        })}
      </div>
    </>
  );
}

function Skill(props) {
  const { name, emoji, color } = props;
  return (
    <div
      className="skill"
      style={{
        backgroundColor: color,
      }}
    >
      <span>{name}</span>
      <span>{emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
