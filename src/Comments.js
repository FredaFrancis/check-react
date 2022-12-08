import React,{Component} from "react";

export default class Comments extends Component{
constructor(props){
    super(props);
    this.state={
        comments:0,
    }
}
handleClick=()=>{
this.setState({
    comments:this.state.comments+1
})

}
render(){
    return(
<div>
Total comments : {this.state.comments}<br/>
<button onClick={this.handleClick}>Add comment</button>

</div>

    )
}

}