import { FriendListProps } from "./FriendList.types";
import styles from "./FriendList.module.scss";
import {useState} from "react";

const FriendList = ({name, age, address, hobbies}: FriendListProps) => {

    // Never ever do this as this is BAD PRACTICE because our prop should remain immutable;
    // const handleIncrementAge = () => {
    //     age+=1;
    //     console.log(age);
    // }
    const [incrementedAge, setAge] = useState(age)
    const handleIncrementAge = () => setAge(incrementedAge + 1);

    return (
        <div className = {styles.FriendList}>
            <h1>{name}</h1>
            <h3>{incrementedAge}</h3>
            <h3>{address}</h3>
            {
                hobbies.map((hobby, index) => <h3 key = {index}>{hobby}</h3>)
            }
            <button onClick = {handleIncrementAge}>Increment Age</button>
            
        </div>
    )
}

export default FriendList;