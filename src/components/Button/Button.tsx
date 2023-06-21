import { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss"

const Button = ({name, onToggleStatus}: ButtonProps) => {
    return (
        <button className={styles.btn_style} onClick={onToggleStatus}>{name}</button>
    )
}

export default Button;
