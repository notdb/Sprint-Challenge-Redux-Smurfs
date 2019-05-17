1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
.map, .filter, Object.assign()
We can use Object.assign() or the spread (...) operator
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is the 'global' state object in redux. Actions are objects with a type and some data, they are dispatched to a reducer, which use them (actions) to update the store (or state). The store is read-only (immutable), which is why you need a reducer to update it by copying part of the state that changed and adding the action that went along with it.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is more global and component state is local. A good use of compenent state is filling out a form. You'd want the form data to be local to that component and then send it to the application state when it's done being filled out.

1.  What is middleware?
Middleware is other software used to extend program functionality

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk allows us to dispatch actions asynchronously. It allows our action creators to use promises


1.  Which `react-redux` method links up our `components` with our `redux store`?
connect
