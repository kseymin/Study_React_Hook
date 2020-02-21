import React, {Component, useEffect, useState} from 'react';
import './App.css';

// 생활코딩 React-class-function style study code
function App() {
    var [funcShow ,setFuncShow] = useState(true);
    var[classShow ,setClassShow] = useState(true);


    return (
        <div className="container">
            <h1> Study Functional source </h1>
            <input type="button" value="Func Remove" onClick={()=>{setFuncShow(false)}}/>
            <input type="button" value="Class Remove"  onClick={()=>{setClassShow(false)}}/>
            {funcShow && <FuncComp initNumber = {2}></FuncComp>}
            {classShow && <ClassComp initNumber = {2}></ClassComp>}
        </div>
    );
}

function FuncComp(props) {
    let numberState = useState(props.initNumber);
    let number = numberState[0];
    let setNumber = numberState[1];

    // let dateState = useState((new Date).toString());
    // let date = dateState[0];
    // let setDate = dateState[1];

    //short
    let [date,setDate] = useState((new Date).toString())

    //Effect mean is side effect

    //useEffect second parmeter => watch value change
    // useEffect(()=>{
    //     console.log('%cFunction Render => DidMount&DidUpdate.','color:blue');
    //
    //     document.title = number;
    //     return ()=>{
    //         console.log('%cFunction Cleanup!','color:blue');
    //     }
    // },[number]);

    //useEffect did mount
    //just Execute 1
    useEffect(()=>{
        console.log('%cFunction Render => DidMount','color:blue');
        document.title = number;
        //if unMount = true => excute
        return ()=>{
            console.log('%cFunction Cleanup!','color:blue');
        }
    },[]);

    console.log('%cFunction Render','color:blue');
    return(
        <div className="container">
            <h2>func Style Component</h2>
            <p>Number : {number}</p>
            <p>Date : {date}</p>
            <input type="button" value="random" onClick={()=>setNumber(Math.random())}/>
            <input type="button" value="date" onClick={()=>setDate((new Date).toString())}/>
        </div>
    );
}

class ClassComp extends Component{
    state = {
        number:this.props.initNumber,
        date : (new Date()).toString()
    };

    componentDidMount() {
        console.log('%cClass Render => DidMount!','color:red');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
    }


    render() {
        console.log('%cClass Render','color:red');
        return (
            <div className="container">
                <h2>Class Style Component</h2>
                <p>Number : {this.state.number}</p>
                <p>{this.state.date}</p>
                <input type="button" value="random" onClick={()=>this.setState({number:Math.random()})}/>
                <input type="button" value="date" onClick={()=>this.setState({date:(new Date()).toString()})}/>
            </div>
        );
    }
}


export default App;
