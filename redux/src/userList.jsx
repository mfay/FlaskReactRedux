import User from './user.jsx';

export default class UserList extends React.Component {
    render() {
            const peeps = this.props.users.map(user => <li key={user.employeeNumber}><User user={user} onClick={this.props.onSelect} /></li>);
            return (
                    <ul>{peeps}</ul>
            );
    }
}