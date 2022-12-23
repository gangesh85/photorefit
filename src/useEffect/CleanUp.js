import { useState } from "react";
import HookRunEffect from "./HookRunEffect";

function CleanUp() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <HookRunEffect />}
    </div>
  );
}

export default CleanUp;
