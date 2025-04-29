import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import tailwind from "../assets/skills/tailwind.png";
import react from "../assets/skills/react.png";
import nodejs from "../assets/skills/nodejs.png";
import express from "../assets/skills/express.png";
import mongodb from "../assets/skills/mongodb.png";
import firebase from "../assets/skills/firebase.png";
import vscode from "../assets/skills/vscode.png";
import git from "../assets/skills/git.png";

const Skills = () => {
  return (
    <div className="mt-28">
      <h1 className="text-4xl text-center font-bold my-12">My Tech Toolbox</h1>
      <div>
        {/* Frontend */}
        <div>
          <h3 className="text-3xl font-semibold my-12 ">Frontend</h3>
          <div className="flex flex-wrap gap-5">
            <div className="p-5 flex flex-col justify-center border border-gray-100 items-center rounded-3xl shadow-lg w-fit">
              <img className="w-24" src={html} alt="" />
              <h3>HTML</h3>
            </div>

            <div className="p-5 flex flex-col justify-center border border-gray-100 items-center rounded-3xl shadow-lg w-fit">
              <img className="w-24" src={css} alt="" />
              <h3>CSS</h3>
            </div>
            <div className="p-5 flex flex-col justify-center border border-gray-100 items-center rounded-3xl shadow-lg w-fit">
              <img className="w-24" src={tailwind} alt="" />
              <h3>Tailwind</h3>
            </div>
            <div className="p-5 flex flex-col justify-center border border-gray-100 items-center rounded-3xl shadow-lg w-fit">
              <img className="w-24" src={react} alt="" />
              <h3>React</h3>
            </div>
          </div>
        </div>
        {/* Backend */}
        <div>
          <h3 className="text-3xl font-semibold my-12 ">Backend</h3>
          <div className="flex flex-wrap gap-5">
            <div className="p-5 flex flex-col justify-center border border-gray-100 items-center rounded-3xl shadow-lg w-fit">
              <img className="w-24" src={nodejs} alt="" />
              <h3>Node.js</h3>
            </div>

            <div className="p-5 flex flex-col justify-center border border-gray-100 items-center rounded-3xl shadow-lg w-fit">
              <img className="w-24" src={express} alt="" />
              <h3>Express</h3>
            </div>
          </div>
        </div>
        {/* Database */}
        <div>
          <h3 className="text-3xl font-semibold my-12 ">Database</h3>
          <div className="flex flex-wrap gap-5">
            <div className="p-5 flex flex-col justify-center border border-gray-100 items-center rounded-3xl shadow-lg w-fit">
              <img className="w-24" src={mongodb} alt="" />
              <h3>MongoDB</h3>
            </div>
          </div>
        </div>

        {/* Dev Tools & Others */}
        <div>
          <h3 className="text-3xl font-semibold my-12 ">Dev Tools & Others</h3>
          <div className="flex flex-wrap gap-5">
            <div className="p-5 flex flex-col justify-center border border-gray-100 items-center rounded-3xl shadow-lg w-fit">
              <img className="w-24" src={vscode} alt="" />
              <h3>VS Code</h3>
            </div>

            <div className="p-5 flex flex-col justify-center border border-gray-100 items-center rounded-3xl shadow-lg w-fit">
              <img className="w-24" src={git} alt="" />
              <h3>Git</h3>
            </div>
            <div className="p-5 flex flex-col justify-center border border-gray-100 items-center rounded-3xl shadow-lg w-fit">
              <img className="w-24" src={firebase} alt="" />
              <h3>Firebase</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
