
import { makeUI } from "../ui/appUI";
import app from "../index";

function storageFix(app) {
  if(!app){
    return;
  }
  if (localStorage.length == 0) {
    console.log("empty storage!");
    populateStorage(app);
  } else {
    loadFromStorage(app);
  }
}


function populateStorage(app) {
  localStorage.setItem("app", JSON.stringify(app.toJSON()));

  loadFromStorage(app);
}

function loadFromStorage(app) {
  const loadedApp = JSON.parse(localStorage.getItem("app"));

  app.ProjectList = structuredClone(loadedApp.ProjectList);

  makeUI(app);
}

export {populateStorage,loadFromStorage}

export default storageFix;
