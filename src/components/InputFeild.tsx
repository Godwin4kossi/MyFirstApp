import React from "react";
import "./style.css";

const InputFeild = () => {
  return  <form className='input'>
    <input type="input" placeholder="Enter your Task" className="input__box"/>
    <button type="submit" className="input__submit">Go</button>


  </form>
  
};

export default InputFeild;

