import "./UserCard.css";

function UserCard(props) {
 /*  const {
    eachUser: { imageUrl, role, firstname },
  } = props; */

 const { imageUrl, firstname, role } = props.eachUser;

  return (
    <li className="card">
      <img src={imageUrl} alt={`Image of ${firstname}`} />
      <h4>{firstname}</h4>
      <p>{role}</p>
      {/* <p>{props.number + props.number2}</p> */}
    </li>
  );
}
/* function UserCard({ eachUser: { imageUrl, firstname, role } }) {
  return (
    <li className="card">
      <img src={imageUrl} alt={`Image of ${firstname}`} />
      <h4>{firstname}</h4>
      <p>{role}</p>
    </li>
  );
} */

/* function UserCard(props) {
  console.log(props);
  const eachUser = props.eachUser;

  const { imageUrl, firstname, role } = eachUser; // desestructurando el objeto de eachUser

  return (
    <li className="card">
      <img src={imageUrl} alt={`Image of ${firstname}`} />
      <h4>{firstname}</h4>
      <p>{role}</p>
      <p>{props.number + props.number2}</p>
    </li>
  );
}
 */
export default UserCard;
