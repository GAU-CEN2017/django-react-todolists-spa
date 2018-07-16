import React, { Component } from 'react';
import { connect } from 'react-redux';

import { lists } from "../actions";

import Task from "./Task";

class Card extends Component {
    /*constructor() {
        super();
    };*/
    state = {
        text: "",
        isEditing: false,
    }


    selectToEdit = () => {
        this.setState({text: this.props.text, isEditing: true});
    }

    submitList = (e) => {
        console.log('submitList');
        e.preventDefault();
        if (this.props.id === null) {
            this.props.addList(this.state.text);
            this.setState({ text: "" });
        } else {
            this.props.updateList(this.props.id, this.state.text);
            this.setState({ isEditing: false });
        }
    }


    render() {
        const createBlock = (
            <div className="card-title">
                <form onSubmit={this.submitList}>
                    <input value={this.state.text}
                        placeholder="Enter new TODO list..."
                        onChange={(e) => this.setState({ text: e.target.value })}
                        required />
                    <button className="card-new_list-btn" type="submit" ><i className="material-icons card-btn">add</i></button>
                </form>
            </div>
        );

        const readOnlyBlock = (
            <div>
                <div className="card-btns">
                    <span onClick={() => this.selectToEdit()} className="material-icons card-btn">create</span>
                    <span onClick={() => this.props.deleteList(this.props.id)} className="material-icons card-btn">delete</span>
                </div>

                <div className="card-title" onClick={() => this.setState({ isEditing: true })}>
                    <h1> {this.props.text} </h1>
                </div>
            </div>
        );

        const editBlock = (
            <div className="card-title">
                <form onSubmit={this.submitList}>
                    <input value={this.state.text}
                        placeholder={this.props.text}
                        onChange={(e) => this.setState({ text: e.target.value })}
                        required />
                    <button className="card-new_list-btn" type="submit" ><i className="material-icons card-btn">done</i></button>
                </form>
            </div>
        );

        return (
            <div>
                {this.props.type === "tasksList" &&
                    <div>
                        {this.state.isEditing === false && readOnlyBlock}
                        {this.state.isEditing === true && editBlock}

                        <div className="card-container">
                            
                            <Task type="tasksList" isEditing={true} id={null}/>  {/*new task */}

                        </div>
                    </div>
                }

                {this.props.type === "newList" && createBlock}



            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        lists: state.lists,
        tasks: state.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addList: (text) => {
            return dispatch(lists.addList(text));
        },
        updateList: (id, text) => {
            return dispatch(lists.updateList(id, text));
        },
        deleteList: (id) => {
            dispatch(lists.deleteList(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);