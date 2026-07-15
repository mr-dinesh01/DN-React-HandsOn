import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const sayHello = () => {
        alert("Hello! Counter value increased.");
    };

    const handleIncrement = () => {
        increment();
        sayHello();
    };

    const welcome = (message) => {
        alert(message);
    };

    const onPress = () => {
        alert("I was clicked");
    };

    return (
        <div>

            <h2>Counter : {count}</h2>

            <button onClick={handleIncrement}>
                Increment
            </button>

            <button onClick={decrement}>
                Decrement
            </button>

            <br /><br />

            <button
                onClick={() => welcome("Welcome")}
            >
                Say Welcome
            </button>

            <br /><br />

            <button onClick={onPress}>
                OnPress
            </button>

        </div>
    );
}

export default Counter;