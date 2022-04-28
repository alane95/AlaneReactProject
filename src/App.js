import { useState } from 'react'
import './App.css';
import Budget from './components/Budget'
import Expense from './components/Expense'
const budgetData = [
  {
    housing: 0 / 1500,
    food: 0 / 300,
    insurance: 0 / 200,
    personalSpending: 0 / 200,
    savings: 200,
    debt: 300
  }
]
const newExpense = {
  name: "",
  amount: "",
  month: "",
}

function App() {
  // 
  const [blist, setbList] = useState([])
  const [elist, seteList] = useState(newExpense)
  const [allExpenses, setAllExpenses] = useState([])
  return (
    <div className="App">
      <h1>The Budget App</h1>
      <div>
        {budgetData.map((el) => {
          return(
      <Budget
        housingData={el.housing}
        foodData={el.food}
        insuranceData={el.insurance}
        personalSpendingData={el.personalSpending}
        savingsData={el.savings}
        debtData={el.debt}
      />
          )
        })
        }
      </div>
      <Expense
        elistProps={elist}
        seteListProps={seteList}
        newExpenseProps={newExpense}
        allExpensesProps={allExpenses}
        setAllExpensesProps={setAllExpenses}
      />
    </div>
  );
}

export default App;

// I want to add an array for my budget and add expenses for each. each time I add an expense the budget number go up.
