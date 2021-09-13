import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearAllContact, selectAllContact } from '../../Redux/actions/contactAction';
import Contact from './Contact';

const Contacts = () => {
    const dispatch = useDispatch();
    const [selectAll, setSelectAll] = useState( false );
    let contacts = useSelector( ( state ) => state.contacts.contacts )
    // console.log( "state data inside contacts js file", contacts )

    return (
        <div>
            <table className="table table-shadow">
                <thead>
                    <tr className="bg-danger text-white">
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input
                                    id="select_all"
                                    type="checkbox"
                                    className="custom-control-input"
                                    value={selectAll}
                                    onClick={() => setSelectAll( !selectAll )}
                                />
                                <label htmlFor="select_all" className="custom-control-label"></label>
                            </div>
                        </th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map( ( contact ) => <Contact contact={contact} key={contact.id} selectAll={selectAll} /> )}

                </tbody>
            </table>
        </div>
    )
}

export default Contacts
