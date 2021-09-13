import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContact, updateContact } from '../../Redux/actions/contactAction'
import shortid from 'shortid'
import { useHistory, useParams } from 'react-router-dom'

const EditContact = () => {
    let { id } = useParams()
    console.log( "use params", useParams() )
    console.log( "ididd", id )
    let history = useHistory();
    const dispatch = useDispatch();
    const contact = useSelector( state => state.contacts.contact )
    // console.log( "contact inside edit", contact )
    const [name, setName] = useState( "" );
    const [email, setEmail] = useState( "" );
    const [phone, setPhone] = useState( "" );



    useEffect( () => {
        if ( contact !== null ) {
            setName( contact.name )
            setEmail( contact.email )
            setPhone( contact.phone )
        }
        dispatch( getContact( id ) )
    }, [contact] )
    const onUpdateContact = e => {
        e.preventDefault()

        const update_contact = Object.assign( contact, {
            name: name,
            phone: phone,
            email: email
        } )
        dispatch( updateContact( update_contact ) )
        history.push( "/" )
    }

    return (
        <div className="card border-0 shadow">
            <div className="card-header bg">Add a Contact</div>
            <div className="card-body">
                <form onSubmit={e => onUpdateContact( e )}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={( e ) => setName( e.target.value )}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Phone Number"
                            value={phone}
                            onChange={( e ) => setPhone( e.target.value )}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your E-mail Address"
                            value={email}
                            onChange={( e ) => setEmail( e.target.value )}
                        />
                    </div>
                    <button className="btn btn-success" type="submit">Update Contact</button>
                </form>
            </div>
        </div>
    )
}

export default EditContact;
