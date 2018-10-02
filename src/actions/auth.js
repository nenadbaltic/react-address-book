import firebase from '../firebase/firebase';

export const login = (uid) => {
    return {
        type: 'LOGIN',
        uid: uid
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}