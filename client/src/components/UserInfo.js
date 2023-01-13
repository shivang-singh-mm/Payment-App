import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./UserInfo.css"


const UserInfo = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [number, setNumber]= useState('')

    const navigate =useNavigate()

    const clickHandler = () =>{
        fetch('/payment-app',{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
          },
          body:JSON.stringify({
            name,
            email,
            number
           }) 
        }).then(()=>navigate('/product'))
    }


  return (
   <>
    <div class="container">  
  <form id="contact">
    <h3>Form Field</h3>
    <h4>this is the contact form fill it!!</h4>
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus value={name} onChange={(e)=>setName(e.target.value) }/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2"  value={email} onChange={(e)=>setEmail(e.target.value)} />
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number" type="tel" tabindex="3" required value={number} onChange={(e)=>setNumber(e.target.value)}/>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" onClick={()=>clickHandler() }>Submit</button>
    </fieldset>
  </form>
 
  
</div>
   </>
  )
}

export default UserInfo