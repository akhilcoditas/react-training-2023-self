import { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss"

const Button = ({buttonName, event}: ButtonProps) => {
    return (
        <button className={styles.btn_style} onClick={event}>{buttonName}</button>
    )
}

export default Button;
