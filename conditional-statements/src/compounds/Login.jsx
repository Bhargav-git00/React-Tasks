import "./Login.css";

function Login() {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>

                <input type="email" placeholder="Enter Email" />
                <input type="password" placeholder="Enter Password" />

                <button type="submit">Sign In</button>
            </div>
        </div>
    );
}

export default Login;