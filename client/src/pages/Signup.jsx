import React, {useState} from 'react'
import "./signup.css"
import axios from "axios"

// to create and maintain state ->. useState hook


const Signup = () => {

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
      <h1>Sign up Page</h1>

      <form onSubmit={signupUser} className='signup-form'>

       <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
       <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
       <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>

       <button type='submit'>Sign up</button>

      </form>
    </div>
  )
}

export default Signup
