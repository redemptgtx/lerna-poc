import { useState } from "react";

import { Button } from "@lerna-poc/components";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <span>{count}</span>
      <Button onClick={() => setCount(count + 1)} label="Increase" />
    </>
  );
}

export default App;
