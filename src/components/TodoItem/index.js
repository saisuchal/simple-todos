import './index.css'
import {Component} from 'react'

class TodoItem extends Component {
  onClick = () => {
    const {initialTodosList, id, setState, state} = this.props
    const prevList = state.list
    console.log(prevList)
    const filteredList = prevList.filter(item => item.id !== id)
    console.log(filteredList)
    setState(filteredList)
  }

  render() {
    const {item} = this.props
    const {title} = item
    return (
      <li>
        <div className="item">
          <p>{title}</p>
          <button type="button" onClick={this.onClick}>
            Delete
          </button>
        </div>
      </li>
    )
  }
}

export default TodoItem
