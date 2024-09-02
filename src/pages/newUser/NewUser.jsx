import './newUser.css';

const NewUser = () => {
  return (
    <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Username</label>
            <input type="text" required placeholder="john"/>
          </div>
          <div className="newUserItem">
            <label>Course</label>
            <input type="text" placeholder="Electrical" />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input type="email" required placeholder="john@gmail.com" />
          </div>
          <div className="newUserItem">
            <label>Phone</label>
            <input type="text" placeholder="+255 622 739 995" />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input type="password" required placeholder="password" />
          </div>
          <div className="newUserItem">
            <label>Class</label>
            <input type="text" placeholder="OD21-EE-1" />
          </div>
          <div className="newUserItem">
                <label>Gender</label>
                <select className="newUserSelect">
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
            <button className="newUserButton">Create</button>
         </div>
          {/* <div className="newUserItem">
            {error && <p style={{color: "red"}}>Something went wrong!</p>}
          </div> */}
        </form>
    </div>
  )
}

export default NewUser