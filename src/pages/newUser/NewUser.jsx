import { useState } from 'react';
import './newUser.css';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../redux/apiCalls';

const NewUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.zealUsers);

  const handleClick = (e) => {
    e.preventDefault();
    addUser(dispatch, {username, password, email, phoneNumber, gender, location});
  }

  return (
    <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Username</label>
            <input type="text" required placeholder="john" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="newUserItem">
            <label>Address</label>
            <input type="text" placeholder="Tanzania" onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input type="email" required placeholder="john@gmail.com" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="newUserItem">
            <label>Phone</label>
            <input type="text" placeholder="+255 622 739 995" onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input type="password" required placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="newUserItem">
            <label>Level</label>
            <input type="text" placeholder="OD21-EE-1" />
          </div>
          <div className="newUserItem">
                <label>Gender</label>
                <select className="newUserSelect" onChange={(e) => setGender(e.target.value)}>
                    <option value="other">Others</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
          <div className="newUserItem">
            <label>Admin</label>
            <select className="newUserSelect">
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div className="newUserItem">
              <button onClick={handleClick} className="newUserButton">{isFetching ? "loading..." : "Create"}</button>
          </div>
          <div className="newUserItem">
            {error && <p style={{color: "red"}}>Something went wrong!</p>}
          </div>
        </form>
    </div>
  )
}

export default NewUser