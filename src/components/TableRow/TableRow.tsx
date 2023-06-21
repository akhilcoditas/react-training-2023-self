import { useState } from 'react';
import Button from '../Button/Button';
import ColorDot from '../StatusSymbol/StatusSymbol';
import styles from './TableRow.module.scss';
import { TableRowProps } from './TableRow.types';

const TableRow = ({serverName, status} : TableRowProps) => {

    const [currentStatus, changeStatus] = useState(status);

    const handleToggleStatus = () => {
        const newState = currentStatus === 'Offline' ? 'Online' : 'Offline';
        changeStatus(newState);
    }
    const statusStyle = {
        backgroundColor: currentStatus === "Offline" ? 'rgb(255, 187, 183)' : 'rgb(183, 255, 199)'
      };

  return (
    <>
        <tr className={styles.evenRow}>
          <td className={styles.td}>{serverName}</td>
          <td className={styles.td} style={statusStyle}><ColorDot color={currentStatus === "Offline" ? 'red' : 'green'}/>{currentStatus}</td>
          <Button name={"Toggle Status"} onToggleStatus={handleToggleStatus}/>
        </tr>
    </>
  );
};

export default TableRow;
