// import React from "react";
import { RegistrationContext } from "../Components/RegistrationContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
export const RegistrationTwo = () => {
    const {
        stateOfResidence, 
        address, 
        pincode, 
        name, 
        age, 
        dateOfBirth,
        dispatch,
        handleSubmit} = useContext(RegistrationContext);
       
        if(!name || !age || !dateOfBirth) {
            return <Navigate to="/registration/one"/>
        }
    return (
        <div>
              <input type="text" 
            placeholder="stateOfResidence"
            value={stateOfResidence}
            onChange={(e) => dispatch({type: "CHANGE_STATEOFRESIDENCE", payload: e.target.value})} /> <br />

            <input type="text" placeholder="address" 
            value={address}
            onChange={(e) => dispatch({type: "CHANGE_ADDRESS", payload: e.target.value})}/> <br />

            <input type="text" placeholder="pincode"
            value={pincode}
            onChange={(e) => dispatch({type:"CHANGE_PINCODE", payload: e.target.value})} /> <br />
            
            <button 
            disabled={!stateOfResidence || !address || !pincode ||
            !name || !age || !dateOfBirth}
            onClick={handleSubmit}>
                submit

            </button>
        </div>
    )
}