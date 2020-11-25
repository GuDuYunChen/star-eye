import React from 'react'
import { Button } from 'antd';

class ComponentB extends React.Component<any, any>{
    state: { wife: string; };

    constructor(props: any) {
        super(props)
        this.state = {
            wife: ''
        }
    }
    _handler = (e) => {

    }
    render() {
        return <div >
            <Button type="primary" onClick={this._handler}>Primary Button</Button>
        </div>
    }
}

export default ComponentB

