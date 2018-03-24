
export default class User extends React.Component {
    render() {
        return (
            <a href="#" onClick={(e) => this.props.onClick(this.props.user.employeeNumber, e)}>{this.props.user.firstName} {this.props.user.lastName}</a>
        )
    }
}