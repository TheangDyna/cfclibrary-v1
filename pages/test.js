import React from "react";  
import { Dialog } from "@material-ui/core";
import Update from "./components/containers/ComfirmPass" ;


export default function test() {

  return (
    <div >
      <Dialog open={true}> 
        <Update />
      </Dialog>
     </div> 
  );
}