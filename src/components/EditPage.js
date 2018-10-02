import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import { startRemoveContact, startEditContact } from '../actions/contacts';

class EditPage extends React.Component {
    onSubmit = (update) => {
        this.props.startEditContact(this.props.contact.id, update);
        this.props.history.push('/');
    }

    removeContact = () => {
        this.props.startRemoveContact(this.props.contact.id);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <h1>{this.props.contact.firstName} {this.props.contact.lastName}</h1>
                <Form contact={this.props.contact} onSubmit={this.onSubmit} />
                <button className="delete-contact" onClick={this.removeContact}>Delete Contact</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        contact: state.contacts.find((contact) => {
            return contact.id === props.match.params.id;
        })
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        startRemoveContact: (id) => dispatch(startRemoveContact(id)),
        startEditContact: (id, update) => dispatch(startEditContact(id, update))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);