import React from 'react';
import { connect } from 'react-redux';
import UserList from './userList.jsx';
import UserDisplay from './userDisplay.jsx';
import { fetchUsers } from './userActions.jsx';

class Layout extends React.Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                <table>
                    <thead>
                        <tr>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td valign="top">
                                <UserList users={this.props.users} onClick={this.props.fetchUsers} onSelect={this.props.selectUser} />
                            </td>
                            <td width="100">&nbsp;</td>
                            <td valign="top">
                                <UserDisplay user={this.props.selectedUser} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        users: state.users,
        selectedUser: state.selectedUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        selectUser: (id) => {
            return dispatch({ type: 'SELECT_USER', payload: id });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);