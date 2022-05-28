import React, { Component } from 'react';

class ClassCounterOne extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }
    componentDidMount(){
        document.title =`clicked ${this.state.count} times`
        console.log('compo did mount')
    }
    componentDidUpdate(prevProps,prevState){
        document.title = `clicked ${this.state.count} times`
        console.log('compo did update')
    }
    
    render() {
        console.log('render')
        return (
            <div>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Click me</button>
                clicked {this.state.count} times
            </div>
        );
    }
}

export default ClassCounterOne;