import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: props.contact ? props.contact.firstName : '',
            lastName: props.contact ? props.contact.lastName : '',
            address: props.contact ? props.contact.address : '',
            birthday: props.contact ? props.contact.birthday : '',
            cellPhone: props.contact ? props.contact.cellPhone : '',
            email: props.contact ? props.contact.email : '',
            buttonText: props.contact ? 'Edit Contact' : 'Create Contact',
            error: undefined
        }
    }
    onFirstNameChange = (e) => {
        const firstName = e.target.value;
        this.setState(() => { return { firstName: firstName } });
    }
    onLastNameChange = (e) => {
        const lastName = e.target.value;
        this.setState(() => { return { lastName: lastName } });
    }
    onAddressChange = (e) => {
        const address = e.target.value;
        this.setState(() => { return { address: address } });
    }
    onBirthdayChange = (e) => {
        const birthday = e.target.value;
        this.setState(() => { return { birthday: birthday } });
    }
    onCellPhoneChange = (e) => {
        const cellPhone = e.target.value;
        this.setState(() => { return { cellPhone: cellPhone } });
    }
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => { return { email: email } });
    }
    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.firstName || !this.state.lastName) {
            this.setState(() => { return { error: 'First Name and Last Name are required!' } })
        }
        else {
            this.setState(() => { return { error: undefined } })
            this.props.onSubmit({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                birthday: this.state.birthday,
                cellPhone: this.state.cellPhone,
                email: this.state.email,
            })
        }
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                {this.state.error && <p className="error">{this.state.error}</p>}
                <ul>
                    <li>
                        <label>First Name: *</label>
                        <input type="text" value={this.state.firstName} onChange={this.onFirstNameChange} />
                    </li>
                    <li>
                        <label>Last Name: *</label>
                        <input type="text"  value={this.state.lastName} onChange={this.onLastNameChange} />
                    </li>
                    <li>
                        <label>Address:</label>
                        <input type="text"  value={this.state.address} onChange={this.onAddressChange} />
                    </li>
                    <li>
                        <label>Birthday:</label>
                        <input type="date"  value={this.state.birthday} onChange={this.onBirthdayChange} />
                    </li>
                    <li>
                        <label>Cell Phone:</label>
                        <input type="text"  value={this.state.cellPhone} onChange={this.onCellPhoneChange} />
                    </li>
                    <li>
                        <label>Email:</label>
                        <input type="email"  value={this.state.email} onChange={this.onEmailChange} />
                    </li>
                    <li>
                        <button>{this.state.buttonText}</button>
                    </li>
                </ul>
            </form>
        );
    }
}

export default Form;