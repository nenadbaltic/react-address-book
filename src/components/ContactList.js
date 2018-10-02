import React from 'react';
import { connect } from 'react-redux';
import ContactListItem from './ContactListItem';
import ContactListFilters from './ContactListFilters';
import { getVisibleContacts } from '../selectors/contacts';
import { sortBy } from '../actions/filters';
import { checkedFields } from '../selectors/fields';

class ContactList extends React.Component {
    onSortChange = (e) => {
        const value = e.target.textContent;
        this.props.sortBy(value);
    };

    render() {
        return (
            <div className="container">
                <div className="contacts">
                    {
                        this.props.contacts.length === 0 ?
                        <p className="no-contacts">You have no contacts!</p>
                        :
                        <div>
                            <ContactListFilters />
                            <div className="contact-list">
                                <ul className="ul-list" 
                                id={this.props.checkedFields === 1 ? 'three' : this.props.checkedFields === 2 ? 'four' : 
                                this.props.checkedFields === 3 ? 'five' : ''} 
                                onClick={this.onSortChange}>
                                    <li className={this.props.filters.sortBy === 'First Name' && this.props.filters.order ? 'asc' : 
                                    this.props.filters.sortBy === 'First Name' ? 'desc' : undefined }>First Name</li>
                                    <li className={this.props.filters.sortBy === 'Last Name' && this.props.filters.order ? 'asc' :
                                    this.props.filters.sortBy === 'Last Name' ? 'desc' : undefined }>Last Name</li>
                                    {this.props.fields.email &&
                                    <li className={this.props.filters.sortBy === 'Email' && this.props.filters.order ? 'asc' : 
                                    this.props.filters.sortBy === 'Email' ? 'desc' : undefined }>Email</li>}
                                    {this.props.fields.address && 
                                    <li className={this.props.filters.sortBy === 'Address' && this.props.filters.order ? 'asc' : 
                                    this.props.filters.sortBy === 'Address' ? 'desc' : undefined }>Address</li>}
                                    {this.props.fields.cellPhone && 
                                    <li className={this.props.filters.sortBy === 'Cell Phone' && this.props.filters.order ? 'asc' : 
                                    this.props.filters.sortBy === 'Cell Phone' ? 'desc' : undefined }>Cell Phone</li>}
                                </ul>
                                {
                                    this.props.visibleContacts.map((contact, index) => {
                                        return <ContactListItem key={index} {...contact} />
                                    })
                                }
                            </div>
                        </div>
                    }
    
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts,
        visibleContacts: getVisibleContacts(state.contacts, state.filters, state.fields),
        filters: state.filters,
        fields: state.fields,
        checkedFields: checkedFields(state.fields)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortBy: (value) => dispatch(sortBy(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);