import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useEffect, useState } from "react";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [logedUser, setLogedUser] = useState([]);
  const { name, email, photo } = logedUser;

  useEffect(() => {
    if (user && user?.email) {
      fetch("http://localhost:5000/users")
        .then((res) => res.json())
        .then((data) => {
          const matchedUser = data.find(
            (userData) => userData.email === user.email
          );
          if (matchedUser) {
            setLogedUser(matchedUser);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      // Set userData to a default value or an empty object
      setLogedUser([]);
    }
  }, [user]);


  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
