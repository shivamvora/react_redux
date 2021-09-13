import React from 'react'
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/actions/contactAction';

const Contact = ( { contact, selectAll } ) => {
    const { name, phone, email, id } = contact
    const dispatch = useDispatch();

    return (
        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <input checked={selectAll} type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label"></label>
                </div>
            </td>
            <td> <Avatar className="mr-2" name={name} size="45" round={true} /> {name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
                <Link to={`/contacts/edit/${id}`}><span className="material-icons mr-2 text-warning">edit</span></Link>

                <span onClick={() => dispatch( deleteContact( id ) )}> <span className="material-icons text-danger cursor" >remove_circle</span></span>
            </td>
        </tr >
    )

}

export default Contact
