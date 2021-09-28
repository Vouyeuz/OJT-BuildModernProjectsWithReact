# OJT 
## 20210927 - Course#1 "Build Modern Projects with React"
  
### INTRODUCTION
✓ 01. React : Going from Good to Great<br>
✓ 02. What You Should Know<br>
✓ 03. Installing Necessary Software<br>
✓ 04. Exercise Files<br>
✓ 05. What This Course Covers<br>
 
### 1. PROJECT OVERVIEW
✓ 06. Why Use the React Ecosystem?<br>
✓ 07. Meet the React Ecosystem Tools<br>
 
### 2. CREATING YOUR BASIC PROJECT
✓ 08. Building a React Project from Scratch<br>
✓ 09. The React Entry Point<br>
✓ 10. Supporting ES6<br>
✓ 11. The Index.js File and App Components<br>
✓ 12. Building and Serving with Webpack<br>
✓ 13. Hot-reloading with React-hot-Loader<br>
✓ 14. Meet the Sample App<br>
✓ 15. Creating the TodoList Component<br>
✓ 16. Creating the TodoListItem Component<br>
✓ 17. Creating the NewTodoForm Component<br>
✓ 18. Putting the App Together<br>
 
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
               This "store.js" component contain 

✓ 21. Adding Redux to a React App<br>
✓ 22. Creating Redux Actions<br>
✓ 23. Creating Reducers<br>
✓ 24. Connecting Components to the Store<br>
✓ 25. Running a React-Redux Application<br>
✓ 26. Persisting the Redux Store

        a. npm i redux-persist => store.js => 
              wrap <App /> using <PersistGate> inside index.js.
        b. PermaCrash debugging: 
              F12 => Application => LocalStorage => clear persist:root.
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
           
           Question: 
           Real-world cases that needs selector to be applied? <br>
  
 29. Challenge: Adding a Redux Flow<br>
 30. Solution: Adding a Redux Flow<br>
 
### 4. DEALING WITH SIDE EFFECTS
 31. Why Do You Need Redux Thunk?<br>
 32. How Does Redux Thunk Work?<br>
 33. Adding Redux Thunk to React<br>
 34. Creating a Thunk<br>
 35. The Todos API<br>
 36. Async Thunks<br>
 37. Adding Another Reducer<br>
 38. Refactoring the Todos Reducer<br>
 39. Using Thunks to Create Server Resources<br>
 40. Using Thunks to Delete Server Resources<br>
 41. Challenge: Using Thunks to Update Server Resou...<br>
 42. Solution: Using Thunks to Update Server Resour...<br>
 
### 5. SELECTORS
 43. Why Do You Need Selectors?<br>
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
 53. Testing React Ecosystems<br>
 54. Testing Reducers<br>
 55. Testing Redux Thunks<br>
 56. Testing Selectors<br>
 57. Testing Styled-Components<br>

### CONCLUSION
 58. Next Steps<br>
