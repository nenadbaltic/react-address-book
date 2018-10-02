import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import firebase from './firebase/firebase';
import { startSetContacts } from './actions/contacts';
import { startSetFields } from './actions/fields';
import { login, logout } from './actions/auth';
import LoadingPage from './components/Loading';

const store = configureStore();

const app = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)


let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(app, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetContacts()).then(() => {
            store.dispatch(startSetFields()).then(() => {
                renderApp();
                if (history.location.pathname === '/') {
                    history.push('/contacts')
                }
            })
        });
    }
    else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
    
});