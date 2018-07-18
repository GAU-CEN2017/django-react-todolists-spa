import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { lists, tasks } from "../actions";
import Header from "./Header";
import Card from "./Card";
import Route from 'react-router-dom/Route';


class TodoToday extends Component {
  /*constructor() {
    super();

    this.

    //this.getListTasks = this.getListTasks.bind(this);
  }*/

  state = {
    text: "",
  }

  componentDidMount() {
    console.log('didMount');
    this.props.fetchLists();
    this.props.fetchTasks();
  }

  componentDidUpdate() {
    console.log('lists:');
    console.log(JSON.stringify(this.props.lists));
    console.log('tasks:');
    console.log(JSON.stringify(this.props.tasks));
  }

  /*submitList = (e) => {
    e.preventDefault();
    this.props.addList(this.state.text);
    this.setState({ text: "" });
  }*/

  /*getListTasks(listId) {
    let tsksLst = [];
    for (var t in this.props.tasks) {
      let tsk = this.props.tasks[t];
      if (tsk.todolist === listId) {
        tsksLst.push(tsk);
      }
    }
    let listTsksList = this.state.listTsksList;
    if(listTsksList.find(id => id===listId)){
      listTsksList[listTsksList.findIndex(id => id===listId)] = ({id: listId, tsksLst: tsksLst});
    } else{
      listTsksList.push({id: listId, tsksLst: tsksLst});
    }

    this.setState({listTsksList: listTsksList});
  }*/

  /* getListTasks(listId) {
    let tsksLst = [];
    for (var t in this.props.tasks) {
      let tsk = this.props.tasks[t];
      if (tsk.todolist === listId) {
        tsksLst.push(tsk);
      }
    }

    return tsksLst;
  } */

  render() {
    return (
      <div>
        <Header />
        <div className="todolists-container d-flex flex-row">
          {this.props.lists.map((list, id) => (
            <div className="card" key={`list_${id}`}>
            <Card text={list.text} type="tasksList" listId={list.id} id={id} />
              {/* <Card text={list.text} type="tasksList" listId={list.id} id={id} tsksLst={this.getListTasks(list.id)} /> */}
              {/*<Card text={list.text} type="tasksList" listId={list.id} id={id} getListTasks={this.getListTasks} />*/}
            </div>
          ))
          }
          <div className="card new_list">
            <Card text="New list" type="newList" id={null} />
          </div>

        </div>


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
    fetchLists: () => {
      dispatch(lists.fetchLists());
    },
    fetchTasks: () => {
      dispatch(tasks.fetchTasks());
    },
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoToday);