import React from 'react';
import { setTextFilter } from '../actions/filters';
import { connect } from 'react-redux';

class ContactListFilters extends React.Component {
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    render() {
        return (
            <div>
                <input type="text" placeholder="Search" value={this.props.filters.text} onChange={this.onTextChange} />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: (text) => dispatch(setTextFilter(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactListFilters);