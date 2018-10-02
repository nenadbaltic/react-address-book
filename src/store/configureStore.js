import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import contactsReducer from '../reducers/contacts';
import filtersReducer from '../reducers/filters';
import fieldsReducer from '../reducers/fields';
import authReducer from '../reducers/auth';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store creation
const configureStore = () => {
    const store = createStore(
        combineReducers({
            contacts: contactsReducer,
            filters: filtersReducer,
            fields: fieldsReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    return store;
}

export default configureStore;
