import uuid from 'uuid';
import { database } from '../firebase/firebase';

// add contact
export const addContact = (contact) => {
    return {
        type: 'ADD_CONTACT',
        contact: contact
    }
}

export const startAddContact = (contactData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        const { firstName = '', lastName = '', address = '', birthday = '', cellPhone = '', email = '' } = contactData;
        const contact = { firstName, lastName, address, birthday, cellPhone, email };

        return database.ref(`users/${uid}/contacts`).push(contact).then((ref) => {
            dispatch(addContact({
                id: ref.key,
                ...contact
            }))
        });
    }
}


// remove contact
export const removeContact = (id) => {
    return {
        type: 'REMOVE_CONTACT',
        id: id
    }
}

export const startRemoveContact = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/contacts/${id}`).remove().then(() => {
            dispatch(removeContact(id));
        })
    }
}


// edit contact
export const editContact = (id, update) => {
    return {
        type: 'EDIT_CONTACT',
        id: id,
        update: update
    }
}

export const startEditContact = (id, update) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/contacts/${id}`).update(update).then(() => {
            dispatch(editContact(id, update));
        })
    }
}

// set contacts
export const setContacts = (contacts) => {
    return {
        type: 'SET_CONTACTS',
        contacts: contacts
    }
}

export const startSetContacts = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/contacts`).once('value').then((snapshot) => {
            const contacts = [];
            snapshot.forEach((childSnapshot) => {
                contacts.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setContacts(contacts));
        })
    }
}

