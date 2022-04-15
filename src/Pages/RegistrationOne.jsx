// import React from "react";
import { RegistrationContext } from "../Components/RegistrationContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

export const RegistrationOne = () => {
    const {name, age, dateOfBirth, dispatch} = useContext(RegistrationContext);
    const navigate = useNavigate();
    return (
        <div>
            
            <input type="text" 
            placeholder="name"
            value={name}
            onChange={(e) => dispatch({type: "CHANGE_NAME", payload: e.target.value})} /> <br />

            <input type="text" placeholder="age" 
            value={age}
            onChange={(e) => dispatch({type: "CHANGE_AGE", payload: e.target.value})}/> <br />

            <input type="date" placeholder="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => dispatch({type:"CHANGE_DOB", payload: e.target.value})} /> <br />
            <button 
            disabled={!name && !age && !dateOfBirth}
            onClick={() => {
                navigate(`/registration/two`)
            }}>
                Next

            </button>
        </div>
    )
}