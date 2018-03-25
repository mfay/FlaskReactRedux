import User from './user.jsx';

export default class UserList extends React.Component {
        render() {
                const peeps = this.props.users.map(user => <li key={user.employeeNumber}><User user={user} onClick={this.props.onSelect} /></li>);
                return (
                        <div>
                                <h1>{this.props.users.length} users</h1>
                                <ul>{peeps}</ul>
                                <button className="btn btn-success" onClick={this.props.onClick}>Add User</button>
                        </div>
                );
        }
}