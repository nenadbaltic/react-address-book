import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import { startAddContact } from '../actions/contacts';

class AddPage extends React.Component {
   onSubmit = (contact) => {
        this.props.startAddContact(contact);
        this.props.history.push('/');
   } 

   render() {
        return (
            <div className="container">
                <h1>New Contact</h1>
                <Form onSubmit={this.onSubmit} />
            </div>
        );
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
        startAddContact: (contact) => dispatch(startAddContact(contact))
   }
}

export default connect(undefined, mapDispatchToProps)(AddPage);