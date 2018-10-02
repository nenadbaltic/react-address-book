export const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text: text
    }
};
export const sortBy = (value) => {
    return {
        type: 'SORT_BY',
        value: value
    }
};