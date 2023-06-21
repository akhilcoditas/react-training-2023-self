import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Box.module.scss";
import { BoxProps } from "./Box.types";

const Box = ({ counterValue, onIncrement }: BoxProps) => {

  // const [currentCount1, setCount1] = useState(counterValue);
  // const [currentCount2, setCount2] = useState(counterValue);
  // const handleOnIncrement = (count) => {

  // }

  return (
    <>
      <div>
        <div className={styles.box}>{counterValue}</div>
        <Button name={"Increment"} onIncrement={onIncrement}/>
      </div>
    </>
  );
};

export default Box;
