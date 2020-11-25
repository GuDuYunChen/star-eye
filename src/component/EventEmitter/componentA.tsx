import React from 'react'
import { Button } from 'antd';

class ComponentA extends React.Component<any, any>{
    state: { wife: string; };

    constructor(props: any) {
        super(props)
        this.state = {
            wife: ''
        }
    }

    render() {
        return <div >
            <Button type="primary">Primary Button</Button>
        </div>
    }
}

export default ComponentA

