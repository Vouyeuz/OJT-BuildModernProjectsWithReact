# OJT 
20210927 - Course#1 "Build Modern Projects with React"
  
INTRODUCTION
✓ 01. React : Going from Good to Great
✓ 02. What You Should Know
✓ 03. Installing Necessary Software
✓ 04. Exercise Files
✓ 05. What This Course Covers
 
1. PROJECT OVERVIEW
✓ 06. Why Use the React Ecosystem?
✓ 07. Meet the React Ecosystem Tools
 
2. CREATING YOUR BASIC PROJECT
✓ 08. Building a React Project from Scratch
✓ 09. The React Entry Point
✓ 10. Supporting ES6
✓ 11. The Index.js File and App Components
✓ 12. Building and Serving with Webpack
✓ 13. Hot-reloading with React-hot-Loader
✓ 14. Meet the Sample App
✓ 15. Creating the TodoList Component
✓ 16. Creating the TodoListItem Component
✓ 17. Creating the NewTodoForm Component
✓ 18. Putting the App Together
 
3. ADDING REDUX
✓ 19. Why Do You Need Redux?
✓ 20. How Does Redux Work?
✓ 21. Adding Redux to a React App
✓ 22. Creating Redux Actions
✓ 23. Creating Reducers
✓ 24. Connecting Components to the Store
✓ 25. Running a React-Redux Application
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
           
           ?{Question} But why is it important to separate 
           async operation from normal redux flow?
           
        c. Think carefully about connecting components. When certain
           child component connected to store through reducers. Think
           far ahead whether that child component will be needed for
           another computation but with same data ie. separate 
           classification between incompleted against completed 
           todos data. 
           #This side-effect will be handled by selector such as reselect
           
           ?{Question} Real-world cases that needs selector to be applied? 
 29. Challenge: Adding a Redux Flow
 30. Solution: Adding a Redux Flow
 
4. DEALING WITH SIDE EFFECTS
 31. Why Do You Need Redux Thunk?
 32. How Does Redux Thunk Work?
 33. Adding Redux Thunk to React
 34. Creating a Thunk
 35. The Todos API
 36. Async Thunks
 37. Adding Another Reducer
 38. Refactoring the Todos Reducer
 39. Using Thunks to Create Server Resources
 40. Using Thunks to Delete Server Resources
 41. Challenge: Using Thunks to Update Server Resou...
 42. Solution: Using Thunks to Update Server Resour...
 
5. SELECTORS
 43. Why Do You Need Selectors?
 44. Creating Selectors
 45. Combining Selectors with Reselect
 46. More About Selectors
 47. Adding Selectors to Components

6. STYLED-COMPONENTS
 48. Why Do You Need Styled-Components?
 49. Creating a Styled-Component
 50. Converting CSS Modules to Style-components
 51. Passing Props to Styled-Components
 52. Extending Styled-Components

7. TESTING
 53. Testing React Ecosystems
 54. Testing Reducers
 55. Testing Redux Thunks
 56. Testing Selectors
 57. Testing Styled-Components

CONCLUSION
 58. Next Steps
