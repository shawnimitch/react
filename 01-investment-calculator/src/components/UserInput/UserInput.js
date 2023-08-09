import { useState } from "react";
import classes from "./UserInput.module.css"

const UserInput = (props) => {
    const initialInput = {
        "current-savings": 5000,
        "yearly-contribution": 1000,
        "expected-return": 8,
        "duration": 10
    }
    const [userInput, setUserInput] = useState(initialInput);

    const submitHandler = (event) => {
        event.preventDefault();
        props.onCalculate(userInput);
    }

    const resetHandler = () => {
        setUserInput(initialInput)
    }

    const changeHandler = (input, value) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: +value
            }
        })
    }
    return (
        <form onSubmit={(event) => submitHandler(event)} className={classes.form}>
            <div className={classes["input-group"]}>
                <p>
                <label htmlFor="current-savings">Current Savings ($)</label>
                <input 
                    onChange={(event) => changeHandler("current-savings", event.target.value)} 
                    value={userInput["current-savings"]}
                    type="number" 
                    id="current-savings" 
                />
                </p>
                <p>
                <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                <input 
                    onChange={(event) => changeHandler("yearly-contribution", event.target.value)} 
                    value={userInput["yearly-contribution"]}
                    type="number" 
                    id="yearly-contribution" 
                />
                </p>
            </div>
            <div className={classes["input-group"]}>
                <p>
                <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                </label>
                <input 
                    onChange={(event) => changeHandler("expected-return", event.target.value)} 
                    value={userInput["expected-return"]}
                    type="number" 
                    id="expected-return" 
                />
                </p>
                <p>
                <label htmlFor="duration">Investment Duration (years)</label>
                <input 
                    onChange={(event) => changeHandler("duration", event.target.value)} 
                    value={userInput["duration"]}
                    type="number" 
                    id="duration" 
                />
                </p>
            </div>
            <p className={classes.actions}>
                <button onClick={resetHandler} type="reset" className={classes.buttonAlt}>
                Reset
                </button>
                <button type="submit" className={classes.button}>
                Calculate
                </button>
            </p>
        </form>
    );
}

export default UserInput