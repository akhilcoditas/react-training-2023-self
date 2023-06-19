import { Component, ReactNode } from "react";
import Friend from "./components/Friends/Friend";
import Box from "./components/Box/box";
import { BoxComponent } from "./components/Box/box";

// Functional component
const App = () => {
  return (
    <div>
      <h1>Hello Akhil</h1>
      <div>
        <p className="friend">this is not friend component</p>
      </div>
      <Friend />
      <Box/>
      <Box/>
      <Box/>
      <BoxComponent/>
    </div>
  );
};

//Class Component
export class AppComponent extends Component {
  render(): ReactNode {
    return <h1>Hello Akhil Class</h1>;
  }
}

export default App;