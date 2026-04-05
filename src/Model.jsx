import { createPortal } from "react-dom";

export default function Model({children}){
     const model=document.getElementById("model");
     return createPortal(children,model);
}