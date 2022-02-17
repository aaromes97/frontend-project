import { useState } from "react";


function LoginPage() {

    const [value, setValue]= useState({username:'', password:''})
 
    
    
    const handleChange = event => {
        setValue(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };
        
    const handleSubmit = event => {
        console.log(event)
        event.preventDefault();
        //call to api - send value
    }


    return <div className="LoginPage">
        <h1 className="loginPage-title">Log in to WallaTrox</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={value.username}
                onChange={handleChange} />
            

            <input
                type="password"
                name="password"
                value={value.password}
                onChange={ handleChange}/>
                
            <button
                type="submit"
                disabled={!value.username || !value.password}>Log In</button>
        </form>
    </div>
};




export default LoginPage;