import React from 'react'
import MyEventEmitter from './myEventEmitter'
import ComponentA from './componentA'
import ComponentB from './componentB'
class ParentComponent extends React.Component {
    myEmitter: MyEventEmitter

    constructor(props) {
        super(props)
        this.myEmitter = new MyEventEmitter()
    }

    render() {
        return <div>
            <ComponentA />
            <ComponentB />
        </div>
    }
}

export default ParentComponent

