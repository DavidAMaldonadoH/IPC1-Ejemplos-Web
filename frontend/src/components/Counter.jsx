import { connect } from 'react-redux'

function incrementCounter(num) {
  return {
    type: 'INCREMENT',
    payload: {
      num: num
    }
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    incrementCounter: (num) => dispatch(incrementCounter(num))
  }
}

function Counter(props) {
  function handleClick() {
    props.incrementCounter(1);
  }
  return (
    <div className='counter-container'>
      <p className='count-display'>{props.count}</p>
      <button onClick={handleClick} className='light-button'>Increment</button>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

