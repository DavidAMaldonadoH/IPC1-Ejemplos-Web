import { legacy_createStore as createStore } from 'redux'

const savedUser = localStorage.getItem('user')

const initialState = {
  user: savedUser ? JSON.parse(savedUser) : null
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        user: action.payload
      }
    case 'LOGOUT':
      return {
        user: null
      }
    default:
      return state
  }
}

export function login(user) {
  return {
    type: 'LOGIN',
    payload: user
  }
}

export function logout() {
  return {
    type: 'LOGOUT'
  }
}

export function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout())
  }
}

export const store = createStore(reducer)
