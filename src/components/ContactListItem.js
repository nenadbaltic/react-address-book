import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkedFields } from '../selectors/fields';

const ContactListItem = (props) => {
    return (
        <Link className="list-item" to={`edit/${props.id}`}>
            <ul id={props.checkedFields === 1 ? 'three' : props.checkedFields === 2 ? 'four' : 
            props.checkedFields === 3 ? 'five' : ''} >
                <li>{props.firstName}</li>
                <li>{props.lastName}</li>
                {props.fields.email && <li>{props.email}</li>}
                {props.fields.address && <li>{props.address}</li>}
                {props.fields.cellPhone && <li>{props.cellPhone}</li>}
            </ul>
        </Link>
    );
}

const mapStateToProps = (state) => {
    return {
        fields: state.fields,
        checkedFields: checkedFields(state.fields)
    }
}

export default connect(mapStateToProps)(ContactListItem);