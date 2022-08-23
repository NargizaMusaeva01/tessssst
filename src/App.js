
// import { useReducer, useState } from "react";
import "./App.css";
import { ToDoForm } from "./components/ToDoForm";

// const userReducer = (state, action) => {
  
//   if (action.type === "ADD_PASSWORD") {
//     const isPasswordValid = action.value>=6
//     return {
//       ...state,
//       password: action.value,
//       isPasswordValid: action.PasswordValid

//     };
//   }
// };

// function App() {
//   const [user, dispatchFn] = useReducer(userReducer, {
//     name: "",
//     password: "",
//     isPasswordValid: false,
//     email: "test@gmail.com",
//     isEmailValid: false,
//     imageUrl: "https://someurl.jpeg",
    
//   });

//   const changePasswordHandler = (event) => {
//     const inputValue = event.target.value;
   
//     // action = действие
//     dispatchFn({ type: "ADD_PASSWORD", value: inputValue, 
//     isPasswordValid: inputValue.length>=6
//   });
   
   
//   };

//   console.log(user);

//   return (
//     <div className="App">
//       {/* event => {...} => changePasswordHandler (password) */}
//       <input onChange={changePasswordHandler} />
//     </div>
//   );
// }


// const [user, setUser] = useState({
//   name: "",
//   password: "123",
//   isPasswordValid: false,
//   email: "test@gmail.com",
//   isEmailValid: false,
//   imageUrl: "https://someurl.jpeg",
// });

// const changePasswordHandler = (password) => {
//   const inputValue = password.target.value;
//   const isPasswordValid = inputValue.length >= 6;
//   setUser((prevState) => {
//     return {
//       ...prevState,
//       password: inputValue,
//       isPasswordValid: isPasswordValid,
//     };
//   });
// };


function App() {
return(
  <div className="App">
    <ToDoForm/>
  </div>
)

    
  };
  export default App;