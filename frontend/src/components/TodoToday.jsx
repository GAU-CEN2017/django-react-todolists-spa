import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { lists } from "../actions";
import Header from "./Header";
import Card from "./Card";
import Route from 'react-router-dom/Route';


class TodoToday extends Component {

  state = {
    text: ""
  }

  componentDidMount() {
    console.log('didMount');
    this.props.fetchLists();
  }

  submitList = (e) => {
    e.preventDefault();
    this.props.addList(this.state.text);
    this.setState({ text: "" });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="todolists-container d-flex flex-row">
          {this.props.lists.map((list, id) => (
            <div className="card" key={`list_${id}`}>
              <Card text={list.text} type="tasksList" id={id} />
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoToday);