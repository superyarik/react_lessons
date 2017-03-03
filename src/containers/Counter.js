import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment } from '../AC/counter'

class Counter extends Component {
    static propTypes = {
        count: PropTypes.number,
        increment: PropTypes.func
    };

    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <a href="#" onClick = {this.handleIncrement}>increment</a>
            </div>
        )
    }

    handleIncrement = (ev) => {
        ev.preventDefault()
        this.props.increment()
    }
}

const mapStateToProps = (state) => {
    return { count: state };
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () =>  dispatch(increment()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps, () => {debugger})(Counter)