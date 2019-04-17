import React from "react";

const UserInput = (pr) => {
    return (
        <div>
            <input className="test" type= "text"  onChange={pr.changed} value={pr.username}/>
        </div>
    )
}

export default UserInput;