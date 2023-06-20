import FriendList from "./components/FriendList/FriendList";

const friendDetails = [
  {
    id: 1,
    name: "Akhil Sachan",
    address: "Indore",
    age: 22,
    hobbies: ["Cricket", "Chess"],
  },
  {
    id: 2,
    name: "Arjun Kesharwani",
    address: "Prayagraj",
    age: 23,
    hobbies: ["Football", "Swimming"],
  },
  {
    id: 3,
    name: "Aniruddha Gohad",
    address: "Pune",
    age: 35,
    hobbies: ["Chess", "Teaching", "Coding"],
  }
]
const App = () => {
  return (
    <div>
      {
        friendDetails.map((friend) => <FriendList key = {friend.id} {...friend}/>)
      }
    </div>
  );
};

export default App;
