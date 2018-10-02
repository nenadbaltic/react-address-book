// Contacts Reducer
const contactsReducerDefaultState = [];

const contactsReducer = (state = contactsReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_CONTACT':
            return [...state, action.contact];
        case 'REMOVE_CONTACT':
            return state.filter((contact) => {
                return contact.id !== action.id
            });
        case 'EDIT_CONTACT':
            return state.map((contact) => {
                if(contact.id === action.id) {
                    return {
                        ...contact,
                        ...action.update
                    }
                }
                return contact
            });
        case 'SET_CONTACTS':
            return action.contacts;
        default:
            return state;
    }
}

export default contactsReducer;