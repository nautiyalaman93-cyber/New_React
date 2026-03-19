import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";



function TextInputFormContainer(){
    const[inputType,setInputType]=useState("text");
    const[value,setValue]=useState(""); 

    const navigate=useNavigate();
    
    function handleFormSumbit(event){
        event.preventDefault();
        console.log(event.target.value)
        if (value){
            setTimeout(()=>{
                navigate("/play")
            },1000)
        }

        
    }

    function handleTextInputChange(event){
        // console.log("Text Input Change")  
        console.log(event.target.value)
        setValue(event.target.value)
    
    }

    function handleShowHideButton(){
        // console.log("Show/Hide button Clicked")
        if (inputType==="password"){
            setInputType("text");
        }else{
            setInputType("password");
        }

        console.log(inputType)
    }

    return(
        <TextInputForm
        inputType={inputType}
        handleFormSumbit={handleFormSumbit}
        handleShowHideButton={handleShowHideButton}
        handleTextInputChange={handleTextInputChange}
        />
    )

} 



export default TextInputFormContainer;