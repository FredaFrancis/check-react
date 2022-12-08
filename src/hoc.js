import React,{Compnent} from "react";

const Hoc=(Compnent,data)=>{
return class extends React.Component{
render(){
return(
<div>
    Hello<Compnent/>
</div>

    
)

}

}
}
export default Hoc;