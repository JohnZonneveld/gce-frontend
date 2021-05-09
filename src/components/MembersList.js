import React, { Component } from 'react'
import {Link} from 'react-router-dom';

const MembersList = ({members}) => {

    return (
        <ul>
            {members.map(member =>
            <li key={member.id}>
                <Link to ={'/members/' + member.id}>{member.name}</Link>
                , {member.role}
            </li>)}
        </ul>
    )
}

export default MembersList