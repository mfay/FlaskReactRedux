
export default class UserEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.user;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }

    handleSave(event) {
        event.preventDefault();
        this.props.onSave(this.state);
    }

    render() {
        return (
            <form action="">
                <input type="hidden" value={this.state.employeeNumber} id="employeeNumber" name="employeeNumber" />
                <div className="form-group">
                    <label htmlFor="firstName"><strong>First Name:</strong></label>
                    <input type="text" id="firstName" name="firstName" value={this.state.firstName} className="form-control" onChange={this.handleInputChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName"><strong>Last Name:</strong></label>
                    <input type="text" id="lastName" name="lastName" value={this.state.lastName} className="form-control" onChange={this.handleInputChange} />
                </div>

                <input type="submit" value="Save" className="btn btn-success" onClick={this.handleSave} />
                <span className="spacer"> </span>
                <input type="button" value="Cancel" className="btn btn-default" onClick={this.props.onCancel} />
            </form>
        );
    }
}