import React, {Component} from 'react';
import {connect} from 'rect-redux';

class UserDetail extends Component {
    render() {
        <div>
        <img src={this.props.user.thumbnail} />
        <h2>{this.props.user.first}</h2>
        </div>
    }
}


function mapStateToProps(state) {
    return {
        users: state.activeUser
    };
}