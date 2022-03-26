import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>  

    <NotesAppBar/>  

   <div className='notes__content'> 
     
     <input
     type= 'text'
     placeholder= 'Some awesome tittle' 
     className='notes__title-input' 
     autoComplete='off'
     /> 

     <textarea 
     placeholder='what happened today'
     className='notes__textarea' 
     ></textarea>

     <div className='notes__image'> 
     <img
     src= "https://www.lavanguardia.com/files/image_948_465/uploads/2019/07/24/5fa532d36c6ae.jpeg"
     alt="foto"
     /> 
     </div>


       </div> 




    </div>
  )
}
