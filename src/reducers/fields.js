// Fields Reducer
const fieldsReducerDefaultState = { email: false, address: false, cellPhone: false };

const fieldsReducer = (state = fieldsReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_FIELDS':
            return state; 
        case 'CHANGE_EMAIL':
            return {
                ...state,
                email: action.isChecked
            };
        case 'CHANGE_ADDRESS':
            return {
                ...state,
                address: action.isChecked
            };
        case 'CHANGE_CELLPHONE':
            return {
                ...state,
                cellPhone: action.isChecked
            };
        case 'SET_FIELDS':
            return action.fields;
        default:
            return state;
    }
}

export default fieldsReducer;