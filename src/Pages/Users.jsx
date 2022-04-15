import React,{useEffect, useState} from "react";
export const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/users`)
        .then((res) => res.json())
        .then((res) => setUsers(res))
        .catch((err) => console.log(err));
    }, [])
    return (
        <table style={{border:"1px solid #cecece"}}>
            <thead>
                <tr>
                    <th style={{border:"1px solid #cecece"}}>Name</th>
                    <th style={{border:"1px solid #cecece"}}>Age</th>
                    <th style={{border:"1px solid #cecece"}}>Date of Birth</th>
                    <th style={{border:"1px solid #cecece"}}>State of Address</th>
                    <th style={{border:"1px solid #cecece"}}>Address</th>
                    <th style={{border:"1px solid #cecece"}}>Pincode</th>
                </tr>
            </thead>
            <body>
                {users.map((user) => (
                    <tr>
                        <td style={{border:"1px solid #cecece"}}>{user.name}</td>
                        <td style={{border:"1px solid #cecece"}}>{user.age}</td>
                        <td style={{border:"1px solid #cecece"}}>{user.dateOfBirth}</td>
                        <td style={{border:"1px solid #cecece"}}>{user.stateOfResidence}</td>
                        <td style={{border:"1px solid #cecece"}}>{user.address}</td>
                        <td style={{border:"1px solid #cecece"}}>{user.pincode}</td>
                    </tr>
                ))}
            </body>
        </table>
    )
}