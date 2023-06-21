import { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss"

const Button = ({name, buttonColor, onColorChange}: ButtonProps) => {

    return (
        <button className={styles.btn_style} style={{backgroundColor: buttonColor}} onClick={onColorChange}>{name}</button>
    )
}

export default Button;
