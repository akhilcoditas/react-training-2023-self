import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';
import styles from './Servers.module.scss';

const Server = () => {
    const serverDetails = [
        {
            id: 1,
            serverName: "EC2",
            status: "Offline"
        },
        {
            id: 2,
            serverName: "Apache Web Server",
            status: "Offline"
        },
        {
            id: 3,
            serverName: "IIS",
            status: "Online"
        },
        {
            id: 4,
            serverName: "NGINX",
            status: "Offline"
        },
        {
            id: 5,
            serverName: "Apache Tomcat",
            status: "Online"
        }
    ]
    
  return (
    <>
      <div>
        <table className={styles.table}>
            <TableHeader HeaderOne={"Server Name"} HeaderTwo={"Current Status"} HeaderThree={"Change Status"}/>
            {
                serverDetails.map((server) => <TableRow key = {server.id} {...server}/>)
            }
        </table>
      </div>
    </>
  );
};

export default Server;
