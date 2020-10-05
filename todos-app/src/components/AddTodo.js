// import React from "react";
// class AddTodo extends React.Component{
//     state = {
//         title : ""
//     };
//     onInputChange = e => {
//         this.setState({
//             title: e.target.value
//         })
//     }
//     addTodo = e => {
//         e.preventDefault();
//         this.props.addTodo(this.state.title);
//         this.setState({
//             title: ""
//         })
//     }
//     render(){
//         return(
//             <form action="" className="form-container" onSubmit = {this.addTodo}>
//                 <input  type="text" name="" placeholder="Add Todo..."  className="input-text"
//                 value = {this.state.title}
//                 onChange={this.onInputChange} id=""/>
//                 <input type="submit" value="Sumbit" className="input-sumbit" />
//             </form>
//         )
//     }
// }
// export default AddTodo;
import React, {useState} from "react";
function AddTodo (props){
    const [title, setTitle] = useState(" ");
    const onInputChange = e => {
        setTitle(e.target.value)
    }
    const addTodo = e => {
        e.preventDefault();
        props.addTodo(title);
        setTitle("");
    }
    return (
        <form action="" onSubmit={addTodo} className="form-container">
            <input type="text" placeholder="Add Todo..." value={title} onChange={onInputChange} className="input-text"/>
            <input type="submit" value="Sumbit" className="input-sumbit"/>
        </form>
    )
}
export default AddTodo;