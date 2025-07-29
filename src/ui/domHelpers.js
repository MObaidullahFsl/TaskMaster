import "../styles/projectStyles.css";
import { ProjModalBody } from "./createProject";

const body = document.querySelector("body");

const header = document.querySelector(".header");

const sidebar = document.querySelector(".sidebar");

const links = document.querySelector(".links");

const dashboard = document.querySelector(".dashboard");

const content = document.querySelector(".content");

const addProject = document.createElement("div");

const removeProject = document.createElement("div");

const buttons = document.querySelector(".buttons");

function homeOptions() {
  if (!document.querySelector(".addProject")) {

    addProject.classList.add("addProject");
    addProject.textContent = "Add Project";

    removeProject.classList.add("removeProject");
    removeProject.textContent = "Remove Project";

    buttons.appendChild(addProject);
    buttons.appendChild(removeProject);

    addProject.addEventListener("click", () => {
      ProjModalBody.classList.toggle("Clicked");
      if (dashboard.classList.contains("remove")) {
        dashboard.classList.remove("remove");
      }
    });

    removeProject.addEventListener("click", () => {
      dashboard.classList.toggle("remove");
      alert("Select Project to Remove!");
    });
  }
}

export {
  body,
  header,
  sidebar,
  links,
  dashboard,
  content,
  addProject,
  removeProject,
  homeOptions,
};
