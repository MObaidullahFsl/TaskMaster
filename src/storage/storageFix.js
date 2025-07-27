
import { makeUI } from "../ui/appUI";

function storageFix(app) {
  
  if (localStorage.length == 0) {
    console.log("empty storage!");
    populateStorage(app);
  } else {
    loadFromStorage(app);
  }
}


function populateStorage(app) {
  localStorage.setItem("app", JSON.stringify(window.debugapp.toJSON()));

  loadFromStorage(app);
}

function loadFromStorage(app) {
  const loadedApp = JSON.parse(localStorage.getItem("app"));

  app.ProjectList = loadedApp.projectlist;

  makeUI(app);
}

export {populateStorage,loadFromStorage}

export default storageFix;
