import axios from "axios"
import { useState } from "react"

export default function Login() {
    const [isSigning, setIsSigning] = useState(false)
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [messageFromServer , setMessageFromServer] = useState('')

    function handleClick() {
        console.log(import.meta.env.VITE_APP_TITLE)
        setIsSigning(true)
        const dataInput = JSON.stringify({
            username: 'well', password: 'go'
        })
        setMessageFromServer('yuhu')
        axios
            .post(import.meta.env.VITE_APP_ENDPOINT + '/users/login', dataInput)
            .then((response) => {
                console.log(response)
                console.log('well')
                setIsSigning(false)
            }).catch(error => {
                console.log(error.response.data.errors.message)
                
                console.error('nah error')
                setIsSigning(false)
            })

    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h1>Welcome 👋</h1>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Fulan" onChange={(e) => setUserName(e.target.value)} autoComplete="off" />
                        <label htmlFor="floatingInput">User ID</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setUserPassword(e.target.value)} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-mb-12 mb-3">
                    <button className="btn btn-primary" disabled={isSigning} onClick={handleClick}>Sign in</button>
                </div>
            </div>
            <div className="row">
                <div className="col-mb-12">
                    <PSIAlert propMessage={messageFromServer} />
                </div>
            </div>
        </div>
    )
}

function PSIAlert({propMessage}) {
    const [message , setMessage] = useState(propMessage)
    console.log({message: message})
    console.log({propMessage: propMessage})
    const itsDisplay = message.length === 0 ? 'alert alert-warning alert-dismissible fade hide' : 'alert alert-warning alert-dismissible fade show'
    
    function handleClick() {
        // setMessage('')
    }
    return (
        <>
            <div className={itsDisplay} role="alert">
                {propMessage}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handleClick}></button>
            </div>
        </>
    )
}