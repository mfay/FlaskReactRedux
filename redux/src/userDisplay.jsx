
export default class UserDisplay extends React.Component {
    render() {
        if (this.props.user != undefined) {
            return (
                <div>
                    <div><strong>Employee ID</strong>: {this.props.user.employeeNumber}</div>
                    <div><strong>First Name</strong>: {this.props.user.firstName}</div>
                    <div><strong>Last Name</strong>: {this.props.user.lastName}</div>
                    <br/>
                </div>
            );
        } else {
            return (
                <span></span>
            );
        }
    }
}