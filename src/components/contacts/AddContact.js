import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../../store'

const AddContact = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState( "" );
    const [email, setEmail] = useState( "" );
    const [phone, setPhone] = useState( "" );

    const createContact = e => {
        e.preventDefault();
        const new_contact = {
            name: name,
            phone: phone,
            email: email
        }
        // localStorage.setItem( 'contacts', JSON.stringify( new_contact ) )
        let temparray = localStorage.getItem( 'new contacts' )
        temparray = JSON.parse( temparray )
        // console.log( "get itme from localstorage", temparray )
        temparray && temparray.length ?
            localStorage.setItem( 'new contacts', JSON.stringify( [...temparray, new_contact] ) )
            :
            localStorage.setItem( 'new contacts', JSON.stringify( [new_contact] ) )
        dispatch( addContact( new_contact ) )
    }

    return (
        <div className="card border-0 shadow">
            <div className="card-header bg">Add a Contact</div>
            <div className="card-body">
                <form onSubmit={( e ) => createContact( e )}>
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
                    <button className="btn btn-primary" type="submit">Create Contact</button>
                </form>
            </div>
        </div>
    )
}

export default AddContact;
