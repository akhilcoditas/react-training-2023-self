import styles from "./TableHeader.module.scss";
import { TableHeaderProps } from "./TableHeader.types";

const TableHeader = ({HeaderOne, HeaderTwo, HeaderThree} : TableHeaderProps) => {
  return (
    <>
      <thead>
        <tr>
          <th className={styles.th}>{HeaderOne}</th>
          <th className={styles.th}>{HeaderTwo}</th>
          <th className={styles.th}>{HeaderThree}</th>
        </tr>
      </thead>
    </>
  );
};

export default TableHeader;
