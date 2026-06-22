import './login.css'

export default function Login() {
    return (
        <div>
            

            <div className="login-container">
                <div className="login-card">
                    <h2>Welcome Back</h2>
                    <p className="subtitle">Login to continue</p>

                    <div className="input-group">
                        <input type="text" required />  
                        <label>Username</label>
                    </div>

                    <div className="input-group">
                        <input type="password" required />
                        <label>Password</label>
                    </div>

                    <button className="login-btn">Login</button>
                </div>
            </div>
        </div>
    )
}