import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Box.module.scss";

const Box = () => {
  const [currentColor, setColor] = useState("blue");
  const [currentButtonColor, setButtonColor] = useState("grey");


  const colors = ["red", "blue", "green", "yellow", "orange", "brown", "black", "skyblue", "royalblue"];
  
  const changeColor = () => {
    const randomColor = Math.floor(Math.random() * colors.length);
    setButtonColor(currentColor);
    setColor(colors[randomColor]);
  };

  return (
    <>
      <div>
        <div className={styles.box} style={{backgroundColor: currentColor}}></div>
        <Button name={"Change Color"} buttonColor={currentButtonColor} onColorChange={changeColor} />
      </div>
    </>
  );
};

export default Box;