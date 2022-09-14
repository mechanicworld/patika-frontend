import React from "react";
import PropType from 'prop-types';

function User({name,surname,isLoggedIn,age,friends,address}) {
  
  if(!isLoggedIn){
    return (<div>You are not logged in</div>)
  }
  return (
    <>
      <h1>
        {isLoggedIn ? `${name} ${surname}` : "Not logged In"}
      </h1>
      {friends.map((friend, index) => (
        <div key={index}>{index}-{friend} </div>
      ))}
    </>
  );
}

User.propTypes = {
  name: PropType.string.isRequired,
  surname: PropType.string.isRequired,
  isLoggedIn: PropType.bool.isRequired,
  age: PropType.oneOfType([PropType.string, PropType.number]).isRequired,
  friends: PropType.array.isRequired,
  address: PropType.shape({
    title: PropType.string,
    zip: PropType.number
  })
}

User.defaultProps={
  name:'No name',
  isLoggedIn : false
}

export default User;
