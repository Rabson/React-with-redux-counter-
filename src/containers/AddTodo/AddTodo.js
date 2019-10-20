import React, { Component } from 'react';
import Aux from '../../hoc/ux';
import { connect } from 'react-redux';

import { increment, decrement, addFive } from '../../store/actions/counter';

class AddTodo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            todotodo: 'dgsfhd'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        alert('The value is: ' + this.state.todo);
        e.preventDefault();
    }
    render() {
        return (<Aux>
        
            <form onSubmit={this.handleSubmit}>
                Todo:<br />
                <input type="text" ref={(input) => this.state.todo} onChange={(e)=> this.setState({ todo: e.target.value })} />
                <br />
                <input type="submit" value="Submit" />
            </form>

        </Aux>)
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement()),
        onIncrementByUser: (number) => dispatch(addFive(Number(number)))
        // onIncrement: () => dispatch({type: INC }),
        // onDecrement: () => dispatch({type: DEC }),
        // onIncrementByUser: (number) => dispatch({type: ADD_FIVE, payload: Number(number) })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);