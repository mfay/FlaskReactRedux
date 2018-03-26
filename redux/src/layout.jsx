import React from 'react';
import { connect } from 'react-redux';
import UserList from './userList.jsx';
import UserDisplay from './userDisplay.jsx';
import UserEdit from './userEdit.jsx';
import * as actions from './userActions.jsx';

class Layout extends React.Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const isEditing = this.props.isEditing;
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td valign="top">
                                <UserList users={this.props.users} onClick={this.props.addUser} onSelect={this.props.editUser}/>
                            </td>
                            <td width="100">&nbsp;</td>
                            <td valign="top">
                                {isEditing ? (
                                    <UserEdit user={this.props.selectedUser} onSave={this.props.saveUser} onCancel={this.props.cancelEditUser} />
                                ) : (
                                        <UserDisplay user={this.props.selectedUser} onClick={this.props.editUser} />
                                    )}
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
        selectedUser: state.selectedUser,
        isEditing: state.isEditing
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(actions.fetchUsers()),
        selectUser: (id) => dispatch(actions.selectUser(id)),
        editUser: (id) => dispatch(actions.editUser(id)),
        addUser: () => dispatch(actions.addUser()),
        cancelEditUser: () => dispatch(actions.cancelEditUser()),
        saveUser: (user) => dispatch(actions.saveUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);