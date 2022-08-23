 import {useReducer} from "react"

 const formReducer = (state, action)=>{
     if(action.type === "ADD_EMAIL"){
         return{
            value: action.emailValue,
            isValid:action.emailValue.includes("@")
         }
     }
     if(action.type === "PASTE"){
         
     }

 }

 export const ToDoForm =()=>{
     const[email, dispatch]= useReducer(formReducer,{
         value: '',
         isValid: false,
     });

     const emailChangeHandler = (event)=>{
         const emailValue = event.target.value;
         dispatch({type:"ADD_EMAIL", emailValue})
         console.log(email);

         const cutHandler = (event)=>{
             dispatch({type: "CUT"});
          
         }

          const pasteHandler = (event)=>{
              dispatch({ type: "PASTE"});
              
          }

     }
     return (
         <>
         <input onchange={emailChangeHandler} type="email" />
         <div>{email.value}</div>
        
         </>
     );
 };
 