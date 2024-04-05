import React from "react"
import ContactManager from "../components/ContactManager"

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

class Counter extends React.Component {
  state = {
    counter: 0
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div className="counter-container">
        <p className="count-display">{this.state.counter}</p>
        <button onClick={this.increment} className="light-button">
          Incremento
        </button>
      </div>
    )
  }
}


function Home() {
  return (
    <main className="container">
      <Welcome name="David" />
      <Counter />
      <ContactManager />
    </main>
  )
}

export default Home