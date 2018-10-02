// Filters Reducer
const filtersReducerDefaultState = { text: '', sortBy: 'First Name', order: true };

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case "SORT_BY":
            return {
                ...state,
                sortBy: action.value,
                order: !state.order
            }
        default:
            return state;
    }
}

export default filtersReducer;