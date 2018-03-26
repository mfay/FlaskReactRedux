import React from 'react';
import { connect } from 'react-redux'
import * as actions from './actions.jsx'

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchEvents(4, 2018);
    }
    render() {
        return (
            <div>
                <CalendarNav />
                {this.props.events.length}
                <br/>
                <a href="#" onClick={this.props.fetchEvents}>Some</a>
            </div>
        );
    }
}

function CalendarNav(props) {
    return (
        <div>I'm a header</div>
    );
}

const mapStateToProps = state => {
    return {
        events: state.events
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchEvents: (month, year) => dispatch(actions.fetchEvents(month, year))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);