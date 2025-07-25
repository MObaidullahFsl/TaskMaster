import App from "./app";
import { makeUI } from "./ui/appUI";

const app = new App; 
 
app.makeApp();

makeUI(app);

export default app;


