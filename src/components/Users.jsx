import "./Users.css";
import usersArray from "../data/users.json";
import UserCard from "./UserCard";

function Users() {
  console.log("ESTO ES USERS: ", usersArray[0]);
  /*  const today = new Date();
  console.log(today.getFullYear()); */

  return (
    <ul className="users-container">
      {usersArray.map((eachUser, i) => {
        return (
          <UserCard
            key={i}
            eachUser={eachUser}
            otracosa="hola"
            number={20 + 10}
            number2={200}
          />
        );
      })}
      {/* <li className="card">
        <img
          src={usersArray[0].imageUrl}
          alt={`Profile picture of ${usersArray[0].firstname}`}
        />
        <h4>{usersArray[0].firstname}</h4>
        <p>{usersArray[0].role}</p>
      </li>
      {[<p>hola</p>, <p>que</p>, <p>tal</p>]} */}
    </ul>
  );
}

export default Users;
