import ReactDOM from 'react';
import { Link } from "react-router-dom"
// import { connect } from 'react-redux'

const Member = (props) => {
    if (props) {
    console.log(props)
    return (
        <>
        <Link to={{
            pathname:"/members/" + props.id, 
            }}>
            {props.name}
        </Link>,   {props.role}
        </>
        
        )
    } else {
        return <p>Nu even niet</p>
    }
    };


export default Member