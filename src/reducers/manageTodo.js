export default function manageTodo(state = {
  todos: []
}, action) {

  // console.log(action.payload);

  switch (action.type) {
    case 'ADD_TODO':
      console.log({ todos: state.todos.concat(action.payload.text) });
      return { todos: state.todos.concat(action.payload.text) };
    default:
      return state;
  }
}
