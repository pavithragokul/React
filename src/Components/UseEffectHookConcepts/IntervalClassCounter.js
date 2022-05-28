import React, { Component } from 'react';

class IntervalClassCounter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }

    componentDidMount(){
        console.log("component did mount");
        this.interval = setInterval(this.tick,1000)
    }

    componentWillUnmount(){
        console.log("component will unmount");
        clearInterval(this.interval)
    }
    tick = ()=>{
        console.log("tick method")
        this.setState({
            count:this.state.count+1
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}

export default IntervalClassCounter;