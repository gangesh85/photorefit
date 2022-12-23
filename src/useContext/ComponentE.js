import { useContext } from "react";
import { channelContext, userContext } from "./CreateContext";

function ComponentE() {
  const user = useContext(userContext);
  const channel = useContext(channelContext);
  return (
    <div>
      {user} - {channel}
    </div>
  );
}
export default ComponentE;

/*
Import useContext hook. Pass the argument. use in jsx.
*/
