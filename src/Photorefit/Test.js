import { useEffect, useState } from "react";

function Test() {
  const [count, setCount] = useState(0);

  const runTime = () => {
      setCount(count + 1)
  }

  useEffect(() => {
    setInterval(runTime, 5000)
  })


  console.log('document updated')
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
export default Test;
