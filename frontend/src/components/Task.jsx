import React, { Component } from 'react';
import { connect } from 'react-redux';

import { tasks } from "../actions";

class Task extends Component {
    state = {
        text: "",
        isEditing: "",
    }

    checkTask = (e) => {
        console.log('enter checkTask');
    }

    submitTask = (e) => {
        console.log('enter submitTask');
        e.preventDefault();
        if(this.props.id === null){
            this.props.addTask(this.state.text, this.props.listId);
            this.setState({ text: "" });
        }else{
            this.props.updateTask(this.props.id, this.state.text);
            this.setState({ isEditing: false });
        }
    }


    render() {
        
        const taskBlock = (
            <div className="list_item" onClick={() => this.checkTask()}>
                <div className="card-btns">
                    <span onClick={() => this.setState({ isEditing: true })} className="material-icons task-btn">create</span>
                    <span onClick={() => this.props.deleteTask(this.props.id)} className="material-icons task-btn">delete</span>
                </div>
                <span className="dot" ></span>
                <span className="task">{this.props.text}</span>
                <br />
            </div>
        )
        
        
        const inputPlaceholder = this.props.id===null ? "enter new task" : this.props.text;
        
        const editTaskBlock = (
            <form onSubmit={() => this.submitTask()}>
                <div className="list_item">
                    <span className="dot" ></span>
                    <input value={this.state.text}
                        type="text" placeholder={inputPlaceholder} className="new_task"
                        onChange={(e) => this.setState({ text: e.target.value })}
                        required />

                </div>
            </form>
        )
        
        const checkedTaskBlock = (
            <div className="list_item" id="task-{task.id}">
                <i class="material-icons check-mark">check_box</i>
                <span className="task" >{this.props.text}</span>
                <br />
            </div>
        )

        return (
            <div>
                
                {this.props.isEditing && editTaskBlock}
                {this.state.isEditing === false && this.props.type === "tasksList" && taskBlock}
                {this.props.type === "checkedTasks" && checkedTaskBlock}
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: (text, listId) => {
            //return dispatch(tasks.addTask(text, listId));
            return dispatch(tasks.addTask(text));
        },
        updateTask: (id, text) => {
            return dispatch(tasks.updateTask(id, text));
        },
        deleteTask: (id) => {
            dispatch(tasks.deleteTask(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);