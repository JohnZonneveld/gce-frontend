import React from 'react'
import {Link} from 'react-router-dom';

const MembersList = ({members}) => {

    return (
        <ul>
            {members.map(
                member =>
                    <li key={member.id}>
                        <Link to ={'/members/' + member.id}>{member.name}</Link>
                        {member.role ? ', ' + member.role : null}
                    </li>
            )}
        </ul>
    )
}

export default MembersList