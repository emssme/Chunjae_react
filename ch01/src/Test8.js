//클래스형의 state(상태정보)
import { Component } from "react"
class Test8 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number:0
        };
    }
    render() {
        const {number}=this.state;
        return (
            <div className="App">
                <h2>{number}</h2>
                <button onClick={()=> this.setState({number:number+1})}>+</button>
            </div>
        )
    }
}

export default Test8