import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router"
import PSIAlert from "../components/PSIAlert"

export default function Login({ onLoggedIn }) {
    const [isSigning, setIsSigning] = useState(false)
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [messageFromServer, setMessageFromServer] = useState('')
    const [messageFromServerType, setMessageFromServerType] = useState('warning')
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/dashboard')
            onLoggedIn(true)
        } else {
            onLoggedIn(false)
        }
    }, [])


    function handleClick() {
        setIsSigning(true)
        const dataInput = JSON.stringify({
            username: userName, password: userPassword
        })

        axios
            .post(import.meta.env.VITE_APP_ENDPOINT + '/users/login', dataInput)
            .then((response) => {
                const token = response.data.token
                localStorage.setItem('token', token)
                onLoggedIn(true)
                setIsSigning(false)
                setMessageFromServer('')
                navigate('/dashboard')
            }).catch(error => {
                try {
                    setMessageFromServer(error.response.data.errors.message)
                } catch (e) {
                    setMessageFromServer(error.message)
                }
                setMessageFromServerType('danger')
                setIsSigning(false)
            })
    }

    function handleClickCloseAlert() {
        setMessageFromServer('')
    }

    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-md-12">
                    <h1>Welcome 👋</h1>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Fulan" maxLength={40} onChange={(e) => setUserName(e.target.value)} autoComplete="off" />
                        <label htmlFor="floatingInput">User ID</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" maxLength={40} onChange={(e) => setUserPassword(e.target.value)} />
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
                    <PSIAlert propMessage={messageFromServer} propMessageType={messageFromServerType} onClickCloseAlert={handleClickCloseAlert} />
                </div>
            </div>
        </div>
    )
}