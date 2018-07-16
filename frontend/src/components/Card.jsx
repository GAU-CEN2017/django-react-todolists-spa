import React, { Component } from 'react';
import { connect } from 'react-redux';

import { lists } from "../actions";

class Card extends Component {
    /*constructor() {
        super();
    };*/
    state = {
        list: "",
        isEditing: false,
    }


    submitList = (e) => {
        console.log('submitList');
        e.preventDefault();
        if (this.props.id === null) {
            this.props.addList(this.state.list);
            this.setState({ list: "" });
        } else {
            this.props.updateList(this.props.id, this.state.list);
            this.setState({ isEditing: false });
        }
    }


    render() {
        const createBlock = (
            <div className="card-title">
                <form onSubmit={this.submitList}>
                    <input value={this.state.list}
                        placeholder="Enter new TODO list..."
                        onChange={(e) => this.setState({ list: e.target.value })}
                        required />
                    <button className="card-new_list-btn" type="submit" ><i class="material-icons card-btn">add</i></button>
                </form>
            </div>
        );

        const readOnlyBlock = (
            <div>
                <div className="card-btns">
                    <span onClick={() => this.setState({ isEditing: true })} className="material-icons card-btn">create</span>
                    <span onClick={() => this.props.deleteList(this.props.id)} className="material-icons card-btn">delete</span>
                </div>

                <div className="card-title" onClick={() => this.setState({ isEditing: true })}>
                    <h1> {this.props.list} </h1>
                </div>
            </div>
        );

        const editBlock = (
            <div className="card-title">
                <form onSubmit={this.submitList}>
                    <input value={this.state.list}
                        placeholder={this.props.list}
                        onChange={(e) => this.setState({ list: e.target.value })}
                        required />
                    <button className="card-new_list-btn" type="submit" ><i class="material-icons card-btn">done</i></button>
                </form>
            </div>
        );

        return (
            <div>
                {this.props.isNewList === false &&
                    <div>
                        {this.state.isEditing === false && readOnlyBlock}
                        {this.state.isEditing === true && editBlock}
                        
                        <div className="card-container">
                            <form>
                                {/*% for task in todolist.task_set.all %}
                        
            <div className="list_item" id="task-{{ task.id }}" data-taskid="{{ task.id }}" data-listid="{{ todolist.id }}" onclick="check_task(this.id)">
                            <span className="dot" name="task-{{ task.id }}"></span>
                            <!--<input type="checkbox" name="task" id="task{{ forloop.counter }}" value="{{ task.id }}" />
                            <label for="task{{ forloop.counter }}">{{ task.task_text }}</label>-->
                <span className="task" id="{{ task.id }}" name="task-{{ task.id }}">{{ task.task_text }}</span>
                        </div>
                        <br />

                        {% endfor %}
                */}
                                <div className="list_item">
                                    <span className="dot" ></span>
                                    <input type="text" placeholder="new task" class="new_task" />
                                </div>
                            </form>
                        </div>
                    </div>
                }

                {this.props.isNewList === true && createBlock}



            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        lists: state.lists,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addList: (list) => {
            return dispatch(lists.addList(list));
        },
        updateList: (id, list) => {
            dispatch(lists.updateList(id, list));
        },
        deleteList: (id) => {
            dispatch(lists.deleteList(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);