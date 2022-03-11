import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
 
import './Home.css'
 
const Home = (props) => {
 
    let navigate = useNavigate();

    //Hook básico 
    const [loginData, setLoginData] = useState({
        email: "", password: ""
    });


    //Handler 

    const handlerLoginData = (ev) => {

        //El handler va a distribuir los datos en el hook. 
        setLoginData({...loginData, [ev.target.name]: ev.target.value});
                                    //email : pepe
    }
    
    useEffect(()=>{
    //UseEffect equivalente a componentDidMount (montado)
 
    },[])
 
    useEffect(()=>{
    //UseEffect equivalente a componentDidUpdate (actualizado)
 
    },)
 
 
    return (
        <div className='designHome'>

            <input name="email" placeholder="email" onChange={(ev)=>handlerLoginData(ev)}/>
            <input name="password" placeholder="password" onChange={(ev)=>handlerLoginData(ev)}/>

        </div>
    )
}
export default Home;