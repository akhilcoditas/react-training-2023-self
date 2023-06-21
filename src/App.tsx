import Box from "./components/Box/Box";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [currentCount1, setCount1] = useState(0);
  const [currentCount2, setCount2] = useState(0);

  return (
    <div className="container">
      <Box
        counterValue={currentCount1}
        onIncrement={() => setCount2(currentCount2 + 1)}
      />
      <Box
        counterValue={currentCount2}
        onIncrement={() => setCount1(currentCount1 + 1)}
      />
    </div>
  );

  //  WAY 02
  // const handleOnIncrement = (counterId) => {
  //   if (counterId === 1) {
  //     setCount1(currentCount1 + 1);
  //   } else if (counterId === 2) {
  //     setCount2(currentCount2 + 1);
  //   }
  // }
  // return (
  //   <div className="container">
  //     <Box counterValue={currentCount1} onIncrement={() => handleOnIncrement(1)}/>
  //     <Box counterValue={currentCount2} onIncrement={() => handleOnIncrement(2)}/>
  //   </div>
  // )
};

export default App;
