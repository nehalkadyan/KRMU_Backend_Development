import React, {useState} from 'react'
import "./signup.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'


// to create and maintain state ->. useState hook

const Signin = () => {

    // username
    const [username, setUsername] = useState("")

    console.log("username : ",username)

    // email
    const [email, setEmail] = useState("");

    console.log("email : ",email)
    // password
    const [password, setPassword] = useState("")

    console.log("password", password)

    // signup function

    const signupUser = async (e) => {
      e.preventDefault(); // to prevent default behaviour of form
        try{
            // make api call
            const response = await axios.post("http://localhost:5001/api/store-user", 
              {username, email, password} // body
            )

        }catch(err){
            console.log("error while signup ", err)
        }
    }

  return (
    <div>
      <h1>Sign In Page</h1>

      <form onSubmit={signupUser} className='signup-form'>

       <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
       <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>

       <button type='submit'>Sign In</button>

      </form>
    </div>
  )
}

export default Signin
