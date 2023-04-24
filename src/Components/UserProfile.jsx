import React from 'react'
import { useState } from 'react';
import { userDatas } from './UserData';
import '../Style/index.css'





const Profile = () => {

  const [userProfile, setUserKeyword] = useState("");

  //change state to the value entered in the textbox
  const handleChangeKeyword = (event) => {
    setUserKeyword(event.target.value);

  }

  //Filter user profile to match user keyword in textbox
  const filteredUsers = userDatas.filter((user) =>
    user.firstName.toLowerCase().includes(userProfile.toLowerCase())
  );


  //loop through the filtered profiles and return matched profiles
  const displayFilteredUsers = filteredUsers.map((user) => {
    return (
      <div>
        <li className="profile-main">
          <div className="image">
            <img src={user.picture} alt='user image' />
          </div>

          <div className="user-info">
            <p>{user.id}</p>
            <p className="info">
              <span>{user.title}. </span>
              <span>{user.firstName} </span>
              <span>{user.lastName}</span>
            </p>
          </div>
        </li>
      </div>
    )
  }
  )


  return (
    <div>
      <input type="text"
        placeholder='Search by name'
        value={userProfile}
        onChange={handleChangeKeyword}
      />
      <div className="flex">
        {displayFilteredUsers}
      </div>


    </div>
  )
}

export default Profile