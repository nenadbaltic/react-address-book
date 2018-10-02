import { database } from '../firebase/firebase';

export const addFields = () => {
    return {
        type: 'ADD_FIELDS'
    }
}

export const startAddFields = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        const fields = { email: false, address: false, cellPhone: false };

        return database.ref(`users/${uid}/fields`).push(fields).then((ref) => {
            dispatch(addFields());
        });
    }
}


export const changeEmail = (isChecked) => {
    return {
        type: 'CHANGE_EMAIL',
        isChecked: isChecked
    }
};

export const startChangeEmail = (isChecked) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        database.ref(`users/${uid}/fields`).once('value').then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
                let id = childSnapshot.key;
                return database.ref(`users/${uid}/fields/${id}`).update({ email: isChecked }).then(() => {
                    dispatch(changeEmail(isChecked));
                })
            })
        })
    }
}


export const changeAddress = (isChecked) => {
    return {
        type: 'CHANGE_ADDRESS',
        isChecked: isChecked
    }
};

export const startChangeAddress = (isChecked) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        database.ref(`users/${uid}/fields`).once('value').then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
                let id = childSnapshot.key;
                return database.ref(`users/${uid}/fields/${id}`).update({ address: isChecked }).then(() => {
                    dispatch(changeAddress(isChecked));
                })
            })
        })
    }
}


export const changeCellPhone = (isChecked) => {
    return {
        type: 'CHANGE_CELLPHONE',
        isChecked: isChecked
    }
};

export const startChangeCellPhone = (isChecked) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        database.ref(`users/${uid}/fields`).once('value').then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
                let id = childSnapshot.key;
                return database.ref(`users/${uid}/fields/${id}`).update({ cellPhone: isChecked }).then(() => {
                    dispatch(changeCellPhone(isChecked));
                })
            })
        })
    }
}


export const setFields = (fields) => {
    return {
        type: 'SET_FIELDS',
        fields: fields
    }
}

export const startSetFields = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/fields`).once('value').then((snapshot) => {
            const userData = snapshot.val();

            if(userData) {
                for(var prop in userData) {
                    dispatch(setFields(userData[prop]));
                }
            }
            else {
                dispatch(startAddFields());
            }      
        });
    }
}