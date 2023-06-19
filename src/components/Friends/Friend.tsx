import styles from "./Friend.module.scss";

const Friend = () => {
    return (
        <p className={styles.friend}>Friend Component</p>
    )
}

export default Friend;

// whenever we use modular css react compile it and create object out of it. and the name is object is dynamic .friend09_jdb, anything 

//react create this mapping object and export it
//     {
    //   friend: "friend_097_hd";
    // }

//in react if we have to apply anything for binding we use interpolation brackets {}, ex- {styles.friend}

//there is no out of the box package scss, we have to install sass package



// return <></> empty tags return called as fragment.