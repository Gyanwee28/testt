import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        pnr:",",
        staff_member_id:"",
        password:"",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
        
    }

    const login = () => {
        axios.post(`http://localhost:8080/api/v1/users/login/${user.userName}`, user)
       
        .then(res => {
            console.log(user)
            // console.log(res.data)
            // alert(res.data.message)
            setLoginUser(res.data.user)
            window.localStorage.setItem('userName',user.userName)
            history.push("/orders")
        })
        .catch(err => {
            alert("Invalid credentials")
            console.log(err);
        })
       
        // history.push('/notes');
    }

    return (
        <div className="loginapp">
            <div className="login">
            <h1>Login</h1>
            <input type="text" name="pnr" value={user.pnr} onChange={handleChange} placeholder="Enter your PNR"></input>
            <input type="text" name="staff_member_id" value={user.staff_member_id} onChange={handleChange} placeholder="Enter your staff member id"></input>
            <input type="text" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Admin Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/Login")}>User Login</div>
        </div>
        </div>
        
    )
}

export default Login
