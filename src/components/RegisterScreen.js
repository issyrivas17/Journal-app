
import React from 'react' 
import {Link} from 'react-router-dom'
import { useForm } from '../hooks/useForm'

export const RegisterScreen = () => {

  const [formValues,handleInputChange] = useForm({
    name:'Ismenia',
    email: 'issy@gmail.com',
    password: '171297',
    password2: '171297'
  })

  const {name,email,password,password2} = formValues  

  const handleRegister = (e) =>{ 
    e.preventDefault (); 
    if (isFormValid ()) {
      console.log('Formulario correcto');
    }
    
  }

  const isFormValid= () => { 
    if (name.trim().length === 0){
      console.log ('Name is required'); 
      return false; 
    }

  }

  return (
     <div>
         
    <h3 className='auth__tittle'>Register</h3> 

    <form onSubmit={handleRegister}>

     <div className='auth__alert-error'> 
      Hola mundo 
     </div>

      <input
      type= "text" 
      placeholder="Email" 
      name= "email" 
      className='auth__input'
      autoComplete='off' 
      value= {email} 
      onChange={handleInputChange}
      /> 

      <input
      type= "text" 
      placeholder="Name" 
      name= "name " 
      className='auth__input'
      autoComplete='off'
      value= {name} 
      onChange={handleInputChange}
      />

      <input
      type= "password" 
      placeholder="Password" 
      name= "password"   
      className='auth__input'
      value= {password} 
      onChange={handleInputChange}
      /> 

     <input
      type= "password" 
      placeholder="Confirm password" 
      name= "confirm"   
      className='auth__input'
      value= {password2} 
      onChange={handleInputChange}
      />

     <button 
     type='submit'
     className='btn btn-primary btn-block mb-5' 
     
     > 

     Register

     </button> 

     
        <Link to ="/auth/login"
        className='link'>  
      Already registered? 
        </Link> 

    </form>



      </div>
  )
}
