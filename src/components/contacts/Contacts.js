import React from 'react'
import { useSelector } from 'react-redux'
import Contact from './Contact';

const Contacts = () => {

    let contacts = useSelector( state => state.contacts )
    console.log( "state data inside contacts js file", contacts )

    return (
        <div>
            <table className="table table-shadow">
                <thead>
                    <tr className="bg-danger text-white">
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" />
                                <label className="custom-control-label"></label>
                            </div>
                        </th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map( ( contact ) => <Contact contact={contact} /> )}

                </tbody>
            </table>
        </div>
    )
}

export default Contacts
