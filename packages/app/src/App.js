import React from "react";
import { Button } from "@lerna-poc/components";

const App = () => {
  // this currently has bug
  // const [count, setCount] = React.useState(0);
  return (
      // <Button onClick={() => setCount(count + 1)} label="click me"/>
      <Button label="I'm a typescript button woohoo!"/>
  );
}

export default App;
