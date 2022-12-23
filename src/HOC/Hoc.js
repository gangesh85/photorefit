import React from 'react'

const UpdatedComponent = OriginalComponent => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
      
          incrementCount = () => {
              this.setState(prevState => {
                 return {count: prevState.count + 1}
              })
          }
        render() {
            return <OriginalComponent count = {this.state.count} incrementCount = {this.incrementCount} />
        }
    }
    return NewComponent
}

export default UpdatedComponent

/*
Higher order component is a function that takes a component as an argument and returns a new component.

syntax: const NewComponent = higherOrderComponent(originalComponent)

syntax: const EnhancedComponent = higherOrderComponent(originalComponent)
*/