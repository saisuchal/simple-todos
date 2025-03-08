import './index.css'
import {Component} from 'react'

class TodoItem extends Component {
  state = {edit: false, checked: false, todoTitle: ''}

  componentDidMount() {
    const {item} = this.props
    const {title} = item
    this.setState({todoTitle: title})
  }

  editToggle = () => {
    this.setState(prevState => ({
      edit: !prevState.edit,
    }))
  }

  checkToggle = () => {
    this.setState(prevState => ({
      checked: !prevState.checked,
    }))
  }

  changeTitle = event => {
    const {value} = event.target
    this.setState({todoTitle: value})
  }

  clickDelete = event => {
    const {value} = event.target
    const {deleteTodo} = this.props
    deleteTodo(value)
  }

  render() {
    const {edit, checked} = this.state
    const {todoTitle} = this.state
    const {item} = this.props
    const {id} = item
    return (
      <li className="list-item">
        <div className="to-do-item">
          <div className="title-div">
            <input
              type="checkbox"
              onChange={this.checkToggle}
              className="checkbox"
            />
            {edit ? (
              <input
                type="text"
                value={todoTitle}
                onChange={this.changeTitle}
                className="edit-title"
              />
            ) : (
              <p className={checked ? 'strike' : null}>{todoTitle}</p>
            )}
          </div>
          <div className="button-div">
            {edit ? (
              <button
                type="button"
                className="save-button"
                onClick={this.editToggle}
              >
                Save
              </button>
            ) : (
              <button
                type="button"
                className="edit-button"
                onClick={this.editToggle}
              >
                Edit
              </button>
            )}
            <button
              type="button"
              onClick={this.clickDelete}
              className="delete-button"
              value={id}
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    )
  }
}

export default TodoItem
