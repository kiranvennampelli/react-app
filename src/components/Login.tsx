import { useRef, useEffect, useState, ChangeEvent } from "react";
import { isExternalModule } from "typescript";
import axios from "axios";
function Login() {

    const userNameRef = useRef<HTMLInputElement>(null);
    const [userName, setUserName] = useState("kiran");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    //useEffect(callback,[dependencies]);
    useEffect(() => {

        console.log("component mounted");
        userNameRef.current?.focus();
    }, []);

    async function handleLogin() {
        if(userName && password ) {
            setMessage("");
            //API CALL
            const url = "http://localhost:9000/login";
            
           // axios
           // .post(url,{name: userName,password:password})
           // .then((response) => {
            //    console.log("sucess",response)
           // }, (error) => {
                //setMessage(error.message);
               // console.log("error",error)
           // })

           //asynch  - await => promise
           try {
                const response = await axios.post(url,{name: userName,password:password});
                console.log("success",response);
                setMessage("");
           } catch(error) {
                console.log("error",error);
                setMessage("Invalid Credentials");
           }
        } else {
            setMessage("Enter the credentials");
        }

     }  


     function handleUserName(evt: ChangeEvent<HTMLInputElement>) {
        const value = evt.target.value;
        setUserName(value);
        console.log(" user name:"+value);
     }
 

     function handlePassword(evt: ChangeEvent<HTMLInputElement>) {
        const value = evt.target.value;
        setPassword(value);
        console.log("password:"+value);
     }
 return(
        <div>
            <h4>login</h4>
            {message ? <div style={{border: "1px solid red"}}>{message}</div>: null}
            <div>
                <form >
                    <div><label htmlFor="name">UserName</label>
                    <input ref={userNameRef} type="text" id="name" placeholder="UserName" value={userName} onChange={handleUserName}/></div>
                    <div><label htmlFor="password">Password</label><input type="text" id="password" placeholder="******" value={password} onChange={handlePassword}/></div>
                    <div>
                        <button type="button" onClick={handleLogin}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;