import React from 'react'
import { useSelector } from 'react-redux'


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
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map( contact => {
                            console.log( "mapped data", contact )
                            return (
                                <tr>
                                    <td>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" />
                                            <label className="custom-control-label"></label>
                                        </div>
                                    </td>
                                    <td>{contact.name}</td>
                                    <td>{contact.phone}</td>
                                    <td>{contact.email}</td>
                                </tr>
                            )
                        } )
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Contacts
