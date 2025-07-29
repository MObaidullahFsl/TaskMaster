import App from "./app";
import storageFix from "./storage/storageFix";
import { makeUI } from "./ui/appUI";

const app = new App; 
 
app.makeApp();

makeUI(app);    

storageFix(app);

export default app;


