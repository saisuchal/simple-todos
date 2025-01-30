import {Component} from 'react'

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
  state = {list: initialTodosList}

  render() {
    const {list} = this.state
    const setState = filteredList => {
      this.setState({list: filteredList})
    }
    return (
      <div className="peach">
        <div className="white">
          <h1>Simple Todos</h1>
          <ul>
            {list.map(item => (
              <TodoItem
                item={item}
                key={item.id}
                id={item.id}
                state={this.state}
                setState={setState}
                initialTodosList={initialTodosList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
