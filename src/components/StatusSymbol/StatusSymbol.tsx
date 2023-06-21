import styles from './StatusSymbol.module.scss'
import { ColorDotProp } from './StatusSymbol.types';

const ColorDot = ({ color }: ColorDotProp) => {

    return <div className={styles.ColorDot} style={{backgroundColor: color}}></div>;
};

export default ColorDot;
