import * as actionType from '../actionTypes/actionType';

//create record
export const addContact = ( contact ) => ( {
    type: actionType.CREATE_CONTACT,
    payload: contact
} )

//get record
export const getContact = ( id ) => ( {
    type: actionType.GET_CONTACT,
    payload: id,
} )

//update record

export const updateContact = ( contact ) => ( {
    type: actionType.UPDATE_CONTACT,
    payload: contact
} )

//delete record

export const deleteContact = ( id ) => ( {
    type: actionType.DELETE_CONTACT,
    payload: id
} )


// select all records

export const selectAllContact = ( id ) => ( {
    type: actionType.SELECT_CONTACT,
    payload: id
} )

// clear selected records

export const clearAllContact = () => ( {
    type: actionType.CLEAR_CONTACT,
} )
