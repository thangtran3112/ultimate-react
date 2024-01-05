import ReactDOM from "react-dom/client";
import React from "react";
import "./style.css";

const emojiMap = new Map([
  ["beginner", "👶"],
  ["intermediate", "👍"],
  ["advanced", "💪"],
]);

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
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
      <ul className="skill-list">
        {skills.map((d) => {
          const { skill, level, color } = d;
          return (
            <Skill skill={skill} color={color} level={level} key={skill} />
          );
        })}
      </ul>
    </>
  );
}

function Skill(props) {
  const { skill, level, color } = props;
  return (
    <li
      className="skill"
      style={{
        backgroundColor: color,
      }}
    >
      <span>{skill}</span>

      {/*Option 1*/}
      {/*<span>{emojiMap.get(level)}</span>*/}

      {/*Option 2: Conditional text within span tag*/}
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>

      {/*Option 3: Conditional display html tags*/}
      {/* 
        {level === "beginner" ? <span>👶</span> : <></>}
        {level === "intermediate" ? <span>👍</span> : <></>}
        {level === "advanced" ? <span>💪</span> : <></>}
      */}
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
