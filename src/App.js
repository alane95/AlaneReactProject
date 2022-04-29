import { useState } from 'react'
import './App.css';
import Budget from './components/Budget'
import Expense from './components/Expense'
// const budgetData =
// {
//   housing: 1500,
//   food: 300,
//   insurance: 200,
//   personalSpending: 200,
//   savings: 200,
//   debt: 300,
// }


const newExpense = {
  name: "",
  amount: "",
  category: ["housing", "food", "insurance", "personal spending", "savings"],
  month: "",
}
const budgetItem = {
  name: "",
  amount: "",
  category: ["housing", "food", "insurance", "personal spending", "savings"],
  month: "",
}
function App() {
  // 
  const [blist, setbList] = useState([])
  const [bitem, setbItem]= useState(budgetItem)
  const [elist, seteList] = useState(newExpense)
  const [allExpenses, setAllExpenses] = useState([])
  const [budgetSum, setBudgetSum] = useState(0)
  const [expenseSum, setExpenseSum] = useState(0)


  // const[allBudgetItems, setAllBudgetItems]= useState([])
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      <h1>The Budget App</h1>

      <Budget
    
        budgetItemProps={budgetItem}
        blistProps={blist}
        setbListProps={setbList}
        bitemProps ={bitem}
        setbItemProps = {setbItem}
        budgetSumProps = {budgetSum}
        setBudgetSumProps = {setBudgetSum}
      />
       <h4>Monthly Budget:{budgetSum}</h4> 
{/* <p>{budgetSum}</p> */}
      <Expense
        elistProps={elist}
        seteListProps={seteList}
        newExpenseProps={newExpense}
        allExpensesProps={allExpenses}
        setAllExpensesProps={setAllExpenses}
        showProps = {show}
        setShowProps = {setShow}
        expenseSumProps = {setExpenseSum}
        setExpenseSumProps = {setExpenseSum}
      />
      <h3>Monthly Expense Total: {expenseSum}</h3> 
     
    </div>
  );
}

export default App;

// I want to add an array for my budget and add expenses for each. each time I add an expense the budget number go up.
