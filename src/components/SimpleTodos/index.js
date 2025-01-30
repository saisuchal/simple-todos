import {Component} from 'react'
import './index.css'

import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {list: initialTodosList, titleInput: ''}

  deleteTodo = id => {
    const {list} = this.state
    console.log(id)
    const filteredList = list.filter(eachItem => parseInt(id) !== eachItem.id)
    console.log(filteredList)
    this.setState({list: filteredList})
  }

  setInput = event => {
    const {value} = event.target
    this.setState({titleInput: value})
  }

  addTodos = () => {
    const {titleInput, list} = this.state
    const splitTitle = titleInput.split(' ')
    const repetitionNumber = splitTitle[splitTitle.length - 1]
    const splitTitleArray = splitTitle.slice(0, splitTitle.length - 1)
    const title = splitTitleArray.join(' ')
    console.log(title)
    const lastId = list[list.length - 1].id
    const subList = []
    let id = lastId + 1
    if (
      parseInt(repetitionNumber) === Number(repetitionNumber) &&
      parseInt(repetitionNumber) >= 1
    ) {
      while (id <= lastId + parseInt(repetitionNumber)) {
        const titleObject = {id, title}
        subList.push(titleObject)
        id += 1
      }
      this.setState(prevState => ({list: prevState.list.concat(subList)}))
    } else if (titleInput === '' || parseInt(repetitionNumber) === 0) {
      this.setState({list})
    } else {
      this.setState(prevState => ({
        list: [...prevState.list, {id, title: titleInput}],
      }))
    }
  }

  render() {
    const {list} = this.state
    console.log(list)
    return (
      <div className="bg-div">
        <div className="todos-div">
          <h1 className="heading">Simple Todos</h1>
          <div className="add-todo-div">
            <input type="textbox" onChange={this.setInput} />
            <button
              type="button"
              onClick={this.addTodos}
              className="add-button"
            >
              Add
            </button>
          </div>
          <ul className="todo-list">
            {list.map(item => (
              <TodoItem
                item={item}
                id={item.id}
                key={`cart${item.id}`}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
