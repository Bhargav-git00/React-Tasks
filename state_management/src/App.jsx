import { useState } from "react";
import "./App.css";

function App() {

    const [darkMode, setDarkMode] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={darkMode ? "app dark" : "app"}>

            <h1>React State Management Tasks</h1>

            <div className="task">
                <h2>Task 1: Black / White Theme</h2>

                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "Change to White" : "Change to Black"}
                </button>
            </div>


            <div className="task">
                <h2>Task 2: Password Visibility</h2>

                <div className="password-box">

                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                    />

                    <button
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>

                </div>
            </div>

        </div>
    );
}

export default App;