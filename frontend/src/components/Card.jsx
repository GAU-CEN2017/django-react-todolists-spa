import React, { Component } from 'react';

class Card extends Component {
    /*constructor(){
        super();
    };*/

    render() {
        return (
            <div>
                <div class="card-btns">
                    <span class="material-icons">create</span>
                    <span class="material-icons">clear</span>
                </div>
                <div class="card-title">
                    <h1> {this.props.text} </h1>
                </div>

                <div class="card-container">
                    <form>
                        {/*% for task in todolist.task_set.all %}
                        
            <div class="list_item" id="task-{{ task.id }}" data-taskid="{{ task.id }}" data-listid="{{ todolist.id }}" onclick="check_task(this.id)">
                            <span class="dot" name="task-{{ task.id }}"></span>
                            <!--<input type="checkbox" name="task" id="task{{ forloop.counter }}" value="{{ task.id }}" />
                            <label for="task{{ forloop.counter }}">{{ task.task_text }}</label>-->
                <span class="task" id="{{ task.id }}" name="task-{{ task.id }}">{{ task.task_text }}</span>
                        </div>
                        <br />

                        {% endfor %}
                */}
                        <div class="list_item">
                            <span class="dot" ></span>
                            <input type="text" placeholder="new task" class="new_task" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Card;