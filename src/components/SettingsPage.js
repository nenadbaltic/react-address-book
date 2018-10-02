import React from 'react';
import { connect } from 'react-redux';
import { startChangeEmail, startChangeAddress, startChangeCellPhone } from '../actions/fields';

class SettingsPage extends React.Component {
    startChangeEmail = (e) => {
        let isChecked = e.target.checked;
        this.props.startChangeEmail(isChecked);
   }
   startChangeAddress = (e) => {
        let isChecked = e.target.checked;
        this.props.startChangeAddress(isChecked);
   }
   startChangeCellPhone = (e) => {
        let isChecked = e.target.checked;
        this.props.startChangeCellPhone(isChecked);
   }

   render() {
        return (
            <div className="container">
                <h1>Settings</h1>
                <div className="settings">
                    <p>Choose the fields to be displayed below:</p>
                    <ul>
                        <li>
                            <input type="checkbox" id="checkEmail" name="checkEmail" checked={this.props.fields.email} onChange={this.startChangeEmail} />
                            <label htmlFor="checkEmail">Email</label>
                        </li>
                        <li>
                            <input type="checkbox" id="checkAddress" name="checkAddress"  checked={this.props.fields.address} onChange={this.startChangeAddress} />
                            <label htmlFor="checkAddress">Address</label>
                        </li>
                        <li>
                            <input type="checkbox" id="checkCellPhone" name="checkCellPhone" checked={this.props.fields.cellPhone} onChange={this.startChangeCellPhone} />
                            <label htmlFor="checkCellPhone">Cell Phone</label>
                        </li>
                    </ul>
                </div>
            </div>
        );
   }
}

const mapStateToProps = (state) => {
    return {
        fields: state.fields
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startChangeEmail: (isChecked) => dispatch(startChangeEmail(isChecked)),
        startChangeAddress: (isChecked) => dispatch(startChangeAddress(isChecked)),
        startChangeCellPhone: (isChecked) => dispatch(startChangeCellPhone(isChecked))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);