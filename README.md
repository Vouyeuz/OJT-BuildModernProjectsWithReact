# OJT 
## 20210927 - Course#1 "Build Modern Projects with React"
  
### INTRODUCTION
✓ 01. React : Going from Good to Great<br>
✓ 02. What You Should Know<br>
✓ 03. Installing Necessary Software<br>
✓ 04. Exercise Files<br>
✓ 05. What This Course Covers

      SEPARATION OF CONCERNS IS THIS COURSE MAIN OBJECTIVE:
         => Components for render component;
         => Reducers for manage state;
         => Thunks for side-effect logic;
         => Selectors for bridging in short;
         => Styled-components for css in js, passing props between style;
         => Unit Testing using mocha and chai;
 
### 1. PROJECT OVERVIEW
✓ 06. Why Use the React Ecosystem?

      => Learn how React works;
      => Build react ecosystem from scrath without using create-react-app biolerplate;

✓ 07. Meet the React Ecosystem Tools
 
### 2. CREATING YOUR BASIC PROJECT
✓ 08. Building a React Project from Scratch
        
       => common practice is npm init -y for standard package.json setting.
       => In our case, in order application running properly just like in the course, duplicate everything inside package.json and run in terminal npm i for download respective node_modules. Using exact same modules versioning, not the latest one. I'm noob, can't config. Npm installing no longer needed al the way to the end of the project.

✓ 09. The React Entry Point<br>

      index.html
      <script src="../dist/bundle.js"><script>
      
✓ 10. Supporting ES6

      .babelrc
      {
        "presets": ["@babel/preset-env", "@babel/preset-react"],
        //async runtime for thunk, added at a later time when installing thunk
        "plugins": ["@babel/plugin-transform-runtime"]
      }

✓ 11. The Index.js File and App Components
      
      index.js
      import React from 'react';
      import ReactDOM from 'react-dom';
      import App from './App.js';
      
      ReactDOM.render(<App />, document.getElementById('root'));
      
      
      App.js
      snippet: rafce
      import React from 'react';

      const App = () => {
        return (
          <div>

          </div>
        )
      }

      export default App;

✓ 12. Building and Serving with Webpack
      
      //webpackConfigOldVersion
      const path = require('path');
      const webpack = require('webpack');
      
      module.exports = {
        entry: './src/index.js',
        mode: 'development',
        module: {
          rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /(node_modules)/,
              loader: 'babel-loader',
              options: { presets: ["@babel/env"]}
            },
            {
              test: /\.css$/,
              use: ["style-loader", "css-loader"]
            }
          ]
        },
        resolve: { extensions: ['*', '.js', '.jsx'] },
        output: {
          path: path.resolve(__dirname, 'dist/'),
          publicPath: '/dist/',
          filename: 'bundle.js'
        },
        devServer: {
          contentBase: path.join(__dirname, 'public/'),
          port: 3000,
          publicPath: 'http://localhost:3000/dist/',
          hotOnly: true
        },
        plugins: [new webpack.HotModuleReplacementPlugin()]
      };

✓ 13. Hot-reloading with React-hot-Loader

      App.js
      import { hot } from 'react-hot-reloader';
      
      ...
      
      export default hot(module)(App);

✓ 14. Meet the Sample App

      note:
      => Props are immutable, defined by parent component, passed to its children components, children only capable for read-only props using this.props; 
      => Props can be set into default value using static defaultProps = {
        propertyA: ...,
        propertyB: ...,
        propertyC: ...
      };
      => children components might be able to manipulate props' value, but only to a minimum extend;

      => State are managable, can be change in various way. But it seems the most appropriate, efficient way to handle state is through redux.
      => without redux. for class-based component, state still can be manipulated using setState, and can be called or stored using this.state that is defined inside constructor(props). As for functional component using react hook such as useState to manage state.
      
✓ 15. Creating the TodoList Component

      import React from "react";
      import styled from "styled-components";
      
      const ListWrapper = styled.div`
        max-width: 700px;
        margin: auto;
      `;

      const TodoList = ({ todos = [] }) => {
        return (
          <ListWrapper>
            <NewTodoForm />
            {todos.map((todo) => (
              <TodoListItem
                key={todo.text}
                todo={todo}
              />
            ))}
          </ListWrapper>
        );
      };

    
      export default TodoList;


✓ 16. Creating the TodoListItem Component

      import React from "react";
      import styled from "styled-components";

      const TodoItemContainer = styled.div`
        background: #fff;
        border-radius: 8px;
        margin-top: 8px;
        padding: 16px;
        position: relative;
        box-shadow: 0 4px 8px grey;
      `;

      const ButtonsContainer = styled.div`
        position: absolute;
        right: 12px;
        bottom: 12px;
      `;

      const Button = styled.button`
        font-size: 16px;
        padding: 8px;
        border: none;
        border-radius: 8px;
        outline: none;
        cursor: pointer;
        display: inline-block;
      `;

      const CompletedButton = styled(Button)`
        background-color: #22ee22;
      `;

      const RemoveButton = styled(Button)`
        background-color: #ee2222;
        margin-left: 8px;
      `;

      const TodoListItem = ({ todo }) => {
        return (
          <TodoItemContainer>
            <h3>{todo.text}</h3>
            <ButtonsContainer>
              {todo.isCompleted ? null : (
                <CompletedButton>
                  Mark as Completed
                </CompletedButton>
              )}

              <RemoveButton>
                Remove
              </RemoveButton>
            </ButtonsContainer>
          </TodoItemContainer>
        );
      };

      export default TodoListItem;


✓ 17. Creating the NewTodoForm Component

      import React, { useState } from "react";
      import styled from "styled-components";
    
      const FormContainer = styled.div`
        border-radius: 8px;
        padding: 16px;
        text-align: center;
        box-shadow: 0 4px 8px grey;
      `;

      const NewTodoInput = styled.input`
        font-size: 16px;
        padding: 8px;
        border: none;
        border-bottom: 2px solid #ddd;
        border-radius: 8px;
        width: 70%;
        outline: none;
      `;

      const NewTodoButton = styled.button`
        font-size: 16px;
        padding: 8px;
        border: none;
        border-radius: 8px;
        outline: none;
        cursor: pointer;
        margin-left: 8px;
        width: 20%;
        background-color: #22ee22;
      `;

      const NewTodoForm = () => {
        const [inputValue, setInputValue] = useState("");
        console.log(inputValue);

        return (
          <FormContainer>
            <NewTodoInput
              type="text"
              placeholder="What to do next?"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <NewTodoButton>
              Create Todo
            </NewTodoButton>
          </FormContainer>
        );
      };

      export default NewTodoForm;


✓ 18. Putting the App Together

      TodoList.js
      import NewTodoForm from "./NewTodoForm";
      import TodoListItem from "./TodoListItem";
        

 
### 3. ADDING REDUX
✓ 19. Why Do You Need Redux?

         Redux needed for state management across components. Global/centralized-state but with strict rules. So no children components has direct access to Global-state.

         Please note that redux only fit to manage synchronuz actions and logic inside application. When you need to communicated with server ie. make request API, it's recommended to not using redux. Use redux-thunk or redux-saga instead as redux libraries that specified to handle this side-effect logic.

         For bigger projects, there is also a recommendation to use selector such as Reselect to differentiated multiply actions and its logic that based on same data or same child component. Use mother/selector component to bridging between children components and redux store.

✓ 20. How Does Redux Work?

         redux works depending on these 3 flux:
            1. UI actions triggered
               This "actions.js" component contains action triggered all across application, whether triggered by clicking button or change on input value. Every single actions that will cause some state change and cause re-rendering, all of them have to be done and collected inside this very component.
            
            2. reducer 
               This "reducers.js" component contains specific logic and cumputation that proccessing certain actions that have been triggered priviously inside of actions component. Thus reducer bring these specific logic from specific action into store component to check and change--if possible-- global state and re-render updated state.

            3. redux store
               This "store.js" component contain rootReducer, in short global state of the application.

✓ 21. Adding Redux to a React App

      => npm i redux react-redux (no need);
      => store.js
         import {createStore, combineReducers} from 'redux';
         
         const reducers = {};
         
         const rootReducer = combineReducer(reducers);
         
         export const configureStore = createStore(rootReducer);
         //then export this configureStore into App.js
         
         /////////////////////////////////////////////////////
      => App.js
         import { Provider } from 'react-redux';
         import { configureStore } from './store';
         
         //wrap <App /> inside Provider
         ReactDOM.render(
            <Provider store={configureStore}>
              <App />
            </Provider>,
            document.getElementById('root')
         );

✓ 22. Creating Redux Actions

      => actions.js
      => define and export any necessary actions and import them into reducers.js
      => define and export any necessary actions and import them into children components and run them inside properties/methods of mapDispatchToProps function. Then pass those methods into that very component as a props to be process or to be passed to other components.
      
      //export to reducers for defining state(structure of data object) according to action(type n payload) inside reducer's switch statement
      export const CREATE_TODO = "CREATE_TODO";
      
      //export to components for execution
      export const createTodo = (text) => ({
        type: CREATE_TODO,
        payload: { text },
      });

      export const REMOVE_TODO = "REMOVE_TODO";
      export const removeTodo = (text) => ({
        type: REMOVE_TODO,
        payload: { text },
      });

      export const MARK_TODO_AS_COMPLETED = "MARK_TODO_AS_COMPLETED";
      export const markTodoAsCompleted = (text) => ({
        type: MARK_TODO_AS_COMPLETED,
        payload: { text },
      });

      
✓ 23. Creating Reducers

      => reducers.js
      import { CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED } from "./actions";

      //export this todos reducer into store.js
      export const todos = (state = [], action) => {
        const { type, payload } = action;

        //each switch case manage how state change depends on specific actions.
        switch (type) {
          case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
              text,
              isCompleted: false,
            };
            return state.concat(newTodo);
          }
          case REMOVE_TODO: {
            const { text } = payload;
            return state.filter((todo) => todo.text !== text);
          }
          case MARK_TODO_AS_COMPLETED: {
            const { text } = payload;
            return state.map(todo => {
                if(todo.text === text) {
                  return {...todo, isCompleted: true};
                }
                return todo;
            })
          }
          default:
            return state;
        }
      };
      
      ////////////////////////////////////////////////////////
      => store.js
      import { todos } from "./todos/reducers";

      //container for reducers all across the application
      const reducers = {
        todos,
      };


✓ 24. Connecting Components to the Store

      => NewTodoForm.js
      //connect component to store.js
      import { connect } from "react-redux";
      // define logic for dispatch function
      import { createTodo } from "./actions";
      
      const NewTodoForm = ({ todos, onCreatePressed }) => {
      
       <NewTodoButton
        onClick={() => {
          // thanks for access granted by mapStateToProps, capable of searching for duplicate todos inside redux-store real-time
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            // when no duplicate data found, allowed to dispatch this mapDispatchToProps' properties action to change and update current state inside redux-store.
            // updated state after triggered by this dispatch, can be use by other components ie. TodoList and TodoListItem components for rendering purpose.
            onCreatePressed(inputValue);
            // reset value
            setInputValue("");
          }
        }}
       >
        Create Todo
       </NewTodoButton>
      
      };
      
      //mapStateToProps function gave access to component for accessing state inside redux-store.
      //state argument contain every state of the application.
      //in this case NewTodoForm.js need access to todos reducers inside our redux-store.
      const mapStateToProps = (state) => ({
        todos: state.todos,
      });

      //trigger change inside redux-store using this dispatch argument.
      // onCreatePressed logic is defined by createTodo function that imported from actions.js file
      const mapDispatchToProps = (dispatch) => ({
        onCreatePressed: (text) => dispatch(createTodo(text)),
      });

      export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
    

✓ 25. Running a React-Redux Application

      => TodoList.js
      import { connect } from "react-redux";
      import { removeTodo, markTodoAsCompleted } from "./actions";

      const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => {
        return (
          <ListWrapper>
            <NewTodoForm />
            {todos.map((todo) => (
              <TodoListItem
                key={todo.text}
                todo={todo}
                
                //defined dispatch's props to be passed for TodoListItem component.
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed}
              />
            ))}
          </ListWrapper>
        );
      };

      const mapStateToProps = (state) => ({
        todos: state.todos,
      });

      const mapDispatchToProps = (dispatch) => ({
        onRemovePressed: text => dispatch(removeTodo(text)),
        onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
      });

      export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
      
      // !note: 
      // export default connect(mapStateToProps)(TodoList);
      // export default connect(null, mapDispatchToProps)(TodoList);
      
      
      => TodoListItem.js
      //logic that defined inside TodoList.js, applied here through actions

      // received props from its parent component, TodoList.js
      // tod0 refers to individual todos that was map methoded
      // onRemovePressed n onCompletedPressed refers to mapDispatchToProps' properties methods 
      const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
        return (
          <TodoItemContainer>
            <h3>{todo.text}</h3>
            <ButtonsContainer>
              //dispatch function applied here
              {todo.isCompleted ? null : (
                <CompletedButton onClick={() => onCompletedPressed(todo.text)}>
                  Mark as Completed
                </CompletedButton>
              )}

              <RemoveButton
                //dispatch function applied here
                onClick={() => {
                  onRemovePressed(todo.text);
                }}
              >
                Remove
              </RemoveButton>
            </ButtonsContainer>
          </TodoItemContainer>
        );
      };

      export default TodoListItem;

✓ 26. Persisting the Redux Store

        a. npm i redux-persist => store.js => 
              wrap <App /> using <PersistGate> inside index.js.
        b. PermaCrash debugging: 
              F12 => Application => LocalStorage => clear persist:root.
              
       => store.js
        import { persistReducer } from "redux-persist";
        import storage from "redux-persist/lib/storage";
        import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
      

        const persistConfig = {
          key: "root",
          //manage locale storage for browser
          storage,
          //tells storage about how its work and how deep it should go
          stateReconciler: autoMergeLevel2,
        };

        const persistedReducer = persistReducer(persistConfig, rootReducer);

        export const configureStore = () =>
          createStore(persistedReducer);
          
          
        => index.js
        import { persistStore } from "redux-persist";
        import { PersistGate } from "redux-persist/lib/integration/react";
        
        const store = configureStore();
        const persistor = persistStore(store);

        ReactDOM.render(
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <App />
            </PersistGate>
          </Provider>,
          document.getElementById("root")
        );
        
       
✓ 27. Redux DevTools:

        web browsers extension or npm packages.
        
✓ 28. Redux Best Practices:
  
        a. Export the connected and unconnected versions of 
           a component. In case pure component version need 
           to be tested and connected to other store.
           
        b. Keep redux actions and async operations out of reducers.
           #This side-effect will be handled by redux thunx or saga.
  
           Question: 
           But why is it important to separate 
           async operation from normal redux flow?
           
        c. Think carefully about connecting components. When certain
           child component connected to store through reducers. Think
           far ahead whether that child component will be needed for
           another computation but with same data ie. separate 
           classification between incompleted against completed 
           todos data.
           Consider to add mother/container component
           for bridging between redux and several children components. 
           #This side-effect will be handled by selector such as reselect
           
            
✓ 29. Challenge: Adding a Redux Flow<br>
✓ 30. Solution: Adding a Redux Flow<br>
 
### 4. DEALING WITH SIDE EFFECTS
✓ 31. Why Do You Need Redux Thunk?<br>
✓ 32. How Does Redux Thunk Work?<br>
✓ 33. Adding Redux Thunk to React<br>
✓ 34. Creating a Thunk<br>
✓ 35. The Todos API<br>
✓ 36. Async Thunks

      thunk have 2 arguments(dispatch, getState)
      dispatch: just like actions
      getState: to get the current state of redux-store

✓ 37. Adding Another Reducer<br>
✓ 38. Refactoring the Todos Reducer<br>
✓ 39. Using Thunks to Create Server Resources<br>
✓ 40. Using Thunks to Delete Server Resources<br>
✓ 41. Challenge: Using Thunks to Update Server Resou...<br>
✓ 42. Solution: Using Thunks to Update Server Resour...<br>
 
### 5. SELECTORS
 43. Why Do You Need Selectors?<br>

      Our children components no need to know how state data are formated in which structure inside our redux-store. And children components no need to contain any logic to change state data format inside of redux-store.

      Main purpose why selectors is necessary is for our components become independent regardless of our structure-data in our redux-store. Only need one selector component and its oneliner adjustment for all of our component to connect to our redux-store.

      Highly recommended for huge application that require to changes its data structure either in reducers or redux-store when data getting bigger when scaling up.
      ### Summary
      Change in data-structure in reducers or store, means no adjustment needed for every children components, only need to adjust selectors component. So our components almost can be completely freed of any logic, thus its sole purpose is render component.

      In order to be completely free, styled-components needed.

 44. Creating Selectors<br>
 45. Combining Selectors with Reselect<br>
 46. More About Selectors<br>
 47. Adding Selectors to Components<br>

### 6. STYLED-COMPONENTS
 48. Why Do You Need Styled-Components?<br>
 49. Creating a Styled-Component<br>
 50. Converting CSS Modules to Style-components<br>
 51. Passing Props to Styled-Components<br>
 52. Extending Styled-Components<br>

### 7. TESTING
 53. Testing React Ecosystems

      define our desired logic into expected unit test, then connect it into our actual file using actual function inside testing file. add any fakeTodos or fake data, didn't affect test result.

      unit testing provide simpler standarization. 

 54. Testing Reducers<br>
 55. Testing Redux Thunks<br>
 56. Testing Selectors<br>
 57. Testing Styled-Components<br>

### CONCLUSION
 58. Next Steps<br>


# Think-tank
## 1. container >< component
      container: logic, async, bridging, sending props, or mothers component;
      component: render, page, pure?, receiving props, or children component;

      that is why most of the time mother component that contains logic, async operation, etc. Bcs sometimes centralize logic is more efficient rather than putting logic in every smallest children components. Easier to track, edit, and passing duplicated props to children components. Usally mother container contains complex logic that have to be pass to different children components, and many children components that almost identical with its siblings, too redundant if every children component have their own logic, identical at that.
## 2. class-based component


# Question
   1. Kenapa isLoading - thunk reducer actionnya cuma masukin type dari actions-nya, ga sekalian didestructure ikutin payload hasil dari actions-nya? 
   Kenapa untuk payloadnya harus diikutin ke switch state punyanya todos reducers--sebelum digabung pas penerapan selector-- dan switch state isLoading cuma ngatasi type aja?
   Bisa kah kalo dibikin sendiri sendiri yg lengkap ada type sama payload.
