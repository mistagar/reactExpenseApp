import React, {useState} from "react"
import "./ExpenseForm.css"


const ExpenseForm = (props)=>{
    const [enteredTitle, setEnteredTitle] = useState("");
    const [amt, setAmt] = useState("");
    const [date, setDate] = useState("");
    // const [userInput, setUserInput]= useState({
    //     enteredTitle: "",
    //     amt:"",
    //     date:""
    // })

    const inputHandler = (event)=>{
        setEnteredTitle(event.target.value);
        // setUserInput((previousState)=>{
        //     return {...previousState, enteredTitle: event.target.value}
        // });
    }
    const amountHandler = (event)=>{
        setAmt(event.target.value);
        // setUserInput((previousState)=>{
        //     return { ...previousState, amt : event.target.value }
        // });
    }
    const dateHandler = (event)=>{
        setDate(event.target.value);
        // setUserInput((previousState)=>{
        //     return { ...previousState, date: event.target.value}
        // });
    }
    const submitHandler = (event)=>{
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: amt,
            date: new Date(date)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setAmt('');
        setDate('');  
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label> Title </label>
                <input type= "text" value={enteredTitle} onChange={inputHandler} />

            </div>
            <div className="new-expense__control">
                <label> Amount </label>
                <input type="number" value={amt} min="0.01" step="0.01" onChange={amountHandler}/>
            </div>
            <div className="new-expense__control">
                <label> Date </label>
                <input type="date" value={date} min="2019-01-01" step="2022-12-31" onChange={dateHandler}/>
            </div>
            <div className="new-expense__actions">
                <button type="submit">
                Add Expense
                </button>

            </div>
        </div>
    </form>
}
export default ExpenseForm;