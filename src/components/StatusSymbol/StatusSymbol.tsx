import styles from './StatusSymbol.module.scss'
import { ColorDotProp } from './StatusSymbol.types';

const ColorDot = ({ color }: ColorDotProp) => {
    const dotStyle = {
        backgroundColor: color
      };

    return <div className={styles.ColorDot} style={dotStyle}></div>;
};

export default ColorDot;
