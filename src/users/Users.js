import React from 'react';
import "./Users.css"

const UsersList = ({users = [], deleteUser}) => {
    
    console.log(users);
    console.log(typeof(users));

    const handleChange = evt => {
        deleteUser(evt.target.dataset.id)
    }

    return (
    <div className="users">
        <div className="d-flex">
            <div className="name-head">Name</div>
            <div className="email-head">Email</div>
        </div>
        
        {users.length > 0 && users.map((i, idx) => (
            <div key={idx} className="user">
                <div>{i.name}</div>
                <div className="email">{i.email}</div>
                <button  data-id={i.id} type="button" onClick={handleChange}>Delete User</button>
            </div>
        ))}
    </div>)
    
}

export default UsersList;