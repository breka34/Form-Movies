import React, { useState } from 'react';
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';
import './Form.css';

const Form = () => {
   const [isSubmitted, setIsSubmitted] = useState(false);
   function submitForm() {
       setIsSubmitted(true);
         }
    return (  
          
        <>
        {!isSubmitted ? <FormSignUp submitForm={submitForm} />
        : <FormSuccess />}
        
        </>  
            
    )
}

export default Form;

