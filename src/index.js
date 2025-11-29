/* fuction expression */
import app from "./app.js";
const main =()=>{
    app.listen(app.get("port"));
    console.log(`The Company's Web Server is Running on port ${app.get("port")}`);
}

main ();
