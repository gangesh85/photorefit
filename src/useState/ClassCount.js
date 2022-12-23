import React, { Component } from 'react'

class ClassCount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    incrementCount = () => {
        this.setState({
           count: this.state.count + 1
        })
    }
    incrementFive = () => {
        this.setState({
            count: this.state.count + 5
        })
    }
    decrementCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    resetCount = () => {
        this.setState({
        count: 0
        })
    }
    render() {
        return(
            <div>
                <div>
                    {this.state.count}
                </div>
                <button onClick={this.incrementCount}>Count: 1</button>
                <button onClick={this.decrementCount}>Count: -1</button>
                <button onClick={this.resetCount}>Reset</button>
                <button onClick={this.incrementFive}>Count: 5</button>
            </div>
        )
    }
}

export default ClassCount
