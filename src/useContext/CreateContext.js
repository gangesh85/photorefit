import React from "react";
import ComponentC from "./ComponentC";

export const userContext = React.createContext();
export const channelContext = React.createContext();

function CreateContext() {
  return (
    <div>
      <userContext.Provider value="Gangesh">
        <channelContext.Provider value="Photorefit">
          <ComponentC />
        </channelContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default CreateContext

/*
createContext() with variable. use as provider in jsx with value.
*/