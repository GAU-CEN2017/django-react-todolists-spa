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
        {/*<h2>Welcome to TodoToday!</h2>
        <hr />*/}

        <div className="todolists-container d-flex flex-row">
          {this.props.lists.map((list, id) => (
            <div className="card" key={id}>
              <Card text={list.text} isNewList={false} id={id} />
            </div>
          ))
          }
          <div className="card new_list">
            <Card text="New list" isNewList={true} id={null} />
          </div>
          {/*
          <div className="btn-new_list-container d-flex flex-column">
            <div className="align-self-center">
              <button className="btn-new_list" name="btn-new_list"> New TODO List </button>
            </div>
          </div>
          */}
        </div>


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
    fetchLists: () => {
      dispatch(lists.fetchLists());
    },
    addList: (text) => {
      dispatch(lists.addList(text));
    },
    updateList: (id, text) => {
      return dispatch(lists.addList(id, text));
    },
    deleteList: (id) => {
      dispatch(lists.deleteList(id));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoToday);