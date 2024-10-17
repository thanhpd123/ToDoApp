import React, { Component } from 'react';
import Todolist from "./Todolist";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          id: 1,
          text: 'Learn Javascript',
          completed: false
        },
        {
          id: 2,
          text: 'Learn React',
          completed: false
        },
        {
          id: 3,
          text: 'Build a React App',
          completed: false
        }
      ]
    }
  }
  render() {
    let title = 'Things to do';

    return (
      <div className="container">
        <div className="row">
          <Todolist title={title}
            addNew={this.addNew.bind(this)}
            items={this.state.items}
          />
        </div>
      </div>
    );
  }
  addNew(text) {
    let nextId = this.state.items.length + 1;
    let item = {
      id: nextId,
      text: text
    };
    let updatedList = this.state.items.concat([item]);

    this.setState({
      items: updatedList
    })
  }
}
export default App;
