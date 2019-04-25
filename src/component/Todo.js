import React from 'react';
import '../css/todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            input: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value,
        })
    }
    handleSubmit = () => {
        this.setState({
            list: [...this.state.list, this.state.input]
        })
    }
    handleDelete = (index) => {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list : list,
        })
        console.log(index)
    }
    render() {
        return(
            <div className="wrap-class">
                <div className="wrap-header">
                <input type="text" className="input" onChange={this.handleChange}></input>
                <button className="button" onClick={this.handleSubmit}>add</button>
                </div>
                <ul>
                    {this.state.list.map((item, index) => {
                        return <li key={index} onClick={() => this.handleDelete(index)}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Todo;