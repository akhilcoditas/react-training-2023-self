import { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss"

const Button = ({name, onIncrement}: ButtonProps) => {

    return (
        <button className={styles.btn_style} onClick={onIncrement}>{name}</button>
    )
}

export default Button;
