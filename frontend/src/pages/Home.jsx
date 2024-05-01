import React from 'react';
import ContactManager from '../components/ContactManager'
import { Provider } from 'react-redux'
import Counter from '../components/Counter'
import { legacy_createStore as createStore } from 'redux'

const initialState = {
  count: 0
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.payload.num
      }
    default:
      return state
  }
}

const store = createStore(reducer)

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

// class Counter extends React.Component {
//   state = {
//     counter: 0
//   }

//   increment = () => {
//     this.setState({
//       counter: this.state.counter + 1
//     });
//   }
//   render() {
//     return (
//       <div className='counter-container'>
//         <p className='count-display'>{this.state.counter}</p>
//         <button onClick={this.increment} className='light-button'>Increment</button>
//       </div>
//     )
//   }
// }

function Home() {
  return (
    <div className='container'>
      <Welcome name="David" />
      <Provider store={store}>
        <Counter />
      </Provider>
      <ContactManager />
    </div>
  )
}

export default Home;