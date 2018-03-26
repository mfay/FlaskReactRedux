import React from 'react';
import { connect } from 'react-redux'
import * as actions from './actions.jsx'

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchEvents();
    }
    render() {
        return (
            <div>
                <CalendarNav />
                <AgendaView events={this.props.events} />
            </div>
        );
    }
}

function AgendaView(props) {
    const events = props.events.map(e => <li key={e.id}>{e.title} {e.startDate}</li>);
    return (
        <div>
            {events}
        </div>
    );
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