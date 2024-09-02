import { Link } from 'react-router-dom'
import './user.css'
import { AdminPanelSettings, Book, LocationSearching, Mail, Person, PhoneAndroid, Publish, Wc,} from "@mui/icons-material";

const User = () => {
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
              <span className="userShowUsername">Amina</span>
              <span className="userShowUserTitle">customer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <Person className="userShowIcon" />
              <span className="userShowInfoTitle Capitalize">Amina</span>
            </div>
            <div className="userShowInfo">
              <Wc className="userShowIcon" />
              <span className="userShowInfoTitle Capitalize">Male</span>
            </div>
            <div className="userShowInfo">
              <Book className="userShowIcon" />
              <span className="userShowInfoTitle Capitalize">Undefined</span>
            </div>
            <div className="userShowInfo">
              <AdminPanelSettings className="userShowIcon" />
              <span className="userShowInfoTitle Capitalize">Not admin</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle Capitalize">+255 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <Mail className="userShowIcon" />
              <span className="userShowInfoTitle">Annafrank23@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle Capitalize">Dar es Salaam | TZ</span>
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
                  placeholder="Anna"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Course</label>
                <input
                  type="text"
                  name="course"
                  placeholder="electrical"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Annafrank23@gmail.com"
                  className="userUpdateInput"
                  name="email"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+255678900987"
                  name="phoneNumber"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Gender</label>
                <select className="newUserSelect" name="gender" id="active">
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
              </div>
              <div className="userUpdateItem">
                <label>isAdmin</label>
                <select className="newUserSelect" name="isAdmin" id="active">
                    <option value="no">no</option>
                    <option value="yes">yes</option>
                </select>
              </div>
              {/* <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Dar es Salaam | TZ"
                  className="userUpdateInput"
                />
              </div> */}
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
                <button className="userUpdateButton">Update</button>
                {/* {error && <p style={{color: "red"}}>error occurred</p>} */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User