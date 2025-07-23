import App from "./app";
import { makeUI } from "./ui/appUI";

const app = new App; 
 
console.log(app);

app.makeApp();

makeUI(app);


