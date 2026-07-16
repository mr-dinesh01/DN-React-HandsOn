import { useState } from "react";
import Guest from "./Guest";
import User from "./User";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <h1>Ticket Booking Application</h1>

            {isLoggedIn ? (
                <>
                    <button onClick={() => setIsLoggedIn(false)}>
                        Logout
                    </button>

                    <hr />

                    <User />
                </>
            ) : (
                <>
                    <button onClick={() => setIsLoggedIn(true)}>
                        Login
                    </button>

                    <hr />

                    <Guest />
                </>
            )}
        </div>
    );
}

export default App;