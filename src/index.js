import App from "./app";
import { makeUI } from "./ui/appUI";

const app = new App; 
 
window.debugapp = app;

app.makeApp();

makeUI(app);    

localStorage.clear();
    
export default app;


