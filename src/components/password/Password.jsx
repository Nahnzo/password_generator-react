import React, {useState} from 'react';
import MyButton from "../myButton/myButton";
import CheckCapital from "../checkCapital/CheckCapital";
import cl from './Password.module.css'
import CheckSymbols from "../checkSymbols/CheckSymbols";
import CopyButton from "../copyButton/CopyButton";

const Password = () => {
    const [capital, setCapital] = useState(false)
    const [symbols,setSymbols] = useState(false)
    const [range, setRange] = useState(36)
    let [password, setPassword] = useState('')
    
    let inc = 0
    const changeCapital = () => {
        inc++
        setCapital(inc % 2 === 0)
        capital === false ? setCapital(true) : setCapital(false)

    }

    const changeSymbols = () => {
        inc++
        setSymbols(inc % 2 === 0)
        symbols === false ? setSymbols(true) : setSymbols(false)
    }


    let all = symbols ? '1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm/><!@#$%^&*()_-+=': '1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'

    function Password() {
        for (let i = 0; i < all.length; i++) {
            let randomNumber = Math.floor(Math.random() * all.length)
            password += all[randomNumber]
            capital ? setPassword(password.slice(0, range).toLowerCase()) : setPassword(password.slice(0, range))
        }
    }

    const copyText = () => {
        navigator.clipboard.writeText(password)
        if(password){
        setTimeout(() => {
            setPassword('Copyed!')
        },.6)
        setTimeout(() => {
            setPassword(password)
        },1000)}

    }


    return (
        <div>
            <div className={cl.output}>{password}</div>
            <MyButton password={password} setPassword={Password}/>
            <input className={cl.progress} type='range' min='8' max='36' onChange={(e) => {
                setRange(e.target.value)
                setPassword('')
            }}>
            </input>
            <div className={cl.range}>{range}</div>
            <CopyButton copy={copyText}/>
            <CheckCapital checked={capital} change={changeCapital}/>
            <CheckSymbols checked={symbols} change={changeSymbols}/>
        </div>
    );
};

export default Password;