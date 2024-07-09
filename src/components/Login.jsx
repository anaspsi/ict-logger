import { useState } from "react"

export default function Login() {
    const [isSigning, setIsSigning] = useState(false)

    function handleClick() {
        console.log(import.meta.env.VITE_APP_TITLE)
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h1>Welcome 👋</h1>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-mb-12">
                    <button className="btn btn-primary" disabled={isSigning} onClick={handleClick}>Sign in</button>
                </div>
            </div>
        </div>
    )
}