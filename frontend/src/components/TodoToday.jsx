import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { lists } from "../actions";


class TodoToday extends Component {

  state = {
    text: ""
  }

  submitList = (e) => {
    e.preventDefault();
    this.props.addList(this.state.text);
    this.setState({text: ""});
  }

  render() {
    return (
      <div>
        <h2>Welcome to TodoToday!</h2>
        <hr />

        <h3>Lists</h3>
        <table>
          <tbody>
            {this.props.lists.map(list => (
              <tr>
                <td>{list.text}</td>
                <td><button>edit</button></td>
                <td><button>delete</button></td>
                <td><button>add task</button></td>
              </tr>
            ))}
          </tbody>
        </table>
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
    addList: (text) => {
      dispatch(lists.addList(text));
    },
    updateList: (id, text) => {
      dispatch(lists.addList(id, text));
    },
    deleteList: (id) => {
      dispatch(lists.deleteList(id));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoToday);