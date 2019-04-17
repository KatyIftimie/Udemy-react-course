import React from 'react';
import './Test1.css';
const UserOutput = (pr) => {
    return (
        <div >
            <p>Primul paragraf...tot nu stiu ce trebuie sa fac.</p>
            <p> Paragrafu al doilea cu {pr.username}</p>
        </div>
    )
}

export default UserOutput;