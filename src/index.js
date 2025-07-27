import App from "./app";
import storageAvailable from "./storage/storageCheck";
import storageFix from "./storage/storageFix";
import { makeUI } from "./ui/appUI";

const app = new App; 
 
window.debugapp = app;

app.makeApp();

makeUI(app);

if (storageAvailable) {
    storageFix(app);
}else{
    console.log("no storage support!");
}

export default app;


