import { Link, useLocation } from 'react-router-dom'
import './user.css'
import { useDispatch, useSelector } from 'react-redux';
import { AdminPanelSettings, Book, LocationSearching, Mail, Person, PhoneAndroid, Publish, Wc,} from "@mui/icons-material";
import { updateUser } from '../../redux/apiCalls';
import { useState } from 'react';

const User = () => {
  const [inputs, setInputs] =  useState({});
  const [updateButtonClicked, setUpdateButtonClicked] = useState(false);
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.zealUsers);
  const user = useSelector((state) => state.zealUsers.users.find((user) => user._id === userId));

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const id = userId;
    const user = { ...inputs };
    updateUser(id, dispatch, user);
    setUpdateButtonClicked(true);
  }

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">USER</h1>
        <Link to="/new-user">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src='../../../images/user.png'
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.username}</span>
              <span className="userShowUserTitle">customer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <Person className="userShowIcon" />
              <span className="userShowInfoTitle Capitalize">{user.username}</span>
            </div>
            <div className="userShowInfo">
              <Wc className="userShowIcon" />
              <span className="userShowInfoTitle Capitalize">Male</span>
            </div>
            <div className="userShowInfo">
              <Book className="userShowIcon" />
              <span className="userShowInfoTitle Capitalize">{user.gender || "Undefined"}</span>
            </div>
            <div className="userShowInfo">
              <AdminPanelSettings className="userShowIcon" />
              <span className="userShowInfoTitle Capitalize">{user.isAdmin ? "Admin": "Not admin"}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle Capitalize">{user.phoneNumber || "Undefined"}</span>
            </div>
            <div className="userShowInfo">
              <Mail className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle Capitalize">{user.location || "Dar es Salaam | TZ"}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder={user.username}
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={user.email}
                  className="userUpdateInput"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder={user.phoneNumber}
                  name="phoneNumber"
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Gender</label>
                <select className="newUserSelect" name="gender" id="active" onChange={handleChange}>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
              </div>
              <div className="userUpdateItem">
                <label>isAdmin</label>
                <select className="newUserSelect" name="isAdmin" id="active" onChange={handleChange}>
                    <option value="no">no</option>
                    <option value="yes">yes</option>
                </select>
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder={user.location || "Dar es Salaam | TZ"}
                  className="userUpdateInput"
                  name="location"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="../../../images/user.png"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div className="productButton-container">
                <button onClick={handleClick} className="productButton">{updateButtonClicked ? (isFetching ? "Updating.." : "Update") : "Update"}</button>
                {updateButtonClicked && error &&
                  <div className="error">
                    <p>error occurred</p>
                  </div>
                } 
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User