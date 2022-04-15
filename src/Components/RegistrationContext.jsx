import { createContext, useReducer} from "react";
// import React from "react";
export const RegistrationContext = createContext()

const initState = {
    name: "",
    age: "",
    dateOfBirth: "",
    stateOfResidence: "",
    address: "",
    pincode: ""

};
const reducer = (state, action) => {
    switch(action.type) {
        case "CHANGE_NAME":
            return {...state, name: action.payload};
         case "CHANGE_AGE":
             return {...state, age: action.payload };
         case "CHANGE_DOB":
             return {...state, dateOfBirth: action.payload };
        case "CHANGE_STATEOFRESIDENCE":
             return {...state, stateOfResidence: action.payload };
        case "CHANGE_ADDRESS":
             return {...state, address: action.payload };
         case "CHANGE_PINCODE":
             return {...state, pincode: action.payload }; 
             default:
             throw new Error();
    }
}


export function RegistrationContextProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initState);
    // console.log(state)

    const handleSubmit=()=>{
        fetch(`http://localhost:8080/users`,{
            method: "POST",
            body: JSON.stringify(state),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res)=>res.json())
        .catch((error)=>console.log(error))
      
    }

    const {name, age, dateOfBirth, stateOfResidence, address, pincode} = state;
     return (
        <RegistrationContext.Provider 
        value={{
            name,
            age,
            dateOfBirth, 
            stateOfResidence, 
            address, 
            pincode, 
            dispatch,
            handleSubmit
            }}
            > 
            {children}
        </RegistrationContext.Provider>
    )
}