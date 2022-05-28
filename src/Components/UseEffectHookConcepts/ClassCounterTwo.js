import React, { Component } from 'react';

class ClassCounterTwo extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0,
            name: ""
        }
    }
    componentDidMount(){
        document.title=(`Clicked ${this.state.count} times`)
        //console.log('compo did mount')
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
        console.log('compo did update')
        document.title=(`Clicked ${this.state.count} times`)
        }
        
    }
    render() {
        //console.log('render')
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e=>{this.setState(
                {name:e.target.value})}}></input>
                <button onClick={()=>this.setState({count:this.state.count +1})}>Clicked {this.state.count} times</button>
            </div>
        );
    }

}

export default ClassCounterTwo;