import React from "react";
import { UserContext, ChannelContext } from "./CreateContext";

function ComponentF() {
  return(
    <div>
      <UserContext.Consumer>
        {user => {
          return (
            <ChannelContext.Consumer>
              {channel => {
                return (
                  <div>
                    user context value {user}, channel context value {channel}
                  </div>
                )
              }}
            </ChannelContext.Consumer>
          )
        }}
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF;

// This component will work only if you import and use in componentE
// This is the example of contextapi
