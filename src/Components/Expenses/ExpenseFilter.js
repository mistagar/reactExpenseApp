import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
    //const [enteredDate, setEnteredDate] = useState("");

    const setDateHandler = (event)=>{
        props.onSelectedYear(event.target.value);
    }
    //new comment
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={setDateHandler} defaultValue={props.initialSelected}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};
//tat
export default ExpensesFilter;