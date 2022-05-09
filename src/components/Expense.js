import { useEffect } from "react"

const Expense = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        props.setAllExpensesProps([
            ...props.allExpensesProps, props.elistProps
        ])
// console.log(props.allExpensesProps)
// console.log(props.elistProps    )
    }
    const sumExpense = () => {
        let sum = 0
        props.allExpensesProps.forEach(element => {
            sum = sum + Number(element.amount);
        });
        props.setExpenseSumProps(sum)
            // console.log(props.allExpensesProps)
    }
    useEffect(sumExpense, [props.allExpensesProps])

    const updateCategoryTotals = () => {
        // console.log(props.categoryExpensesProps)
        // const keys = Object.keys(props.categoryExpensesProps.totals);
        // keys.forEach(({expenseCat}) => {
        //     console.log({expenseCat})
        //     const housingExpenses = props.allExpensesProps.filter((item) =>
        //         item.category == expenseCat
        //     )
        //     let housingSum = 0
        //     housingExpenses.forEach(element => {
        //         housingSum = housingSum + Number(element.amount);
        //     })
        //     let { totals: { expenseCat: myHousing } } = props.categoryExpensesProps
        //     let { totals: housingTotal } = props.categoryExpensesProps
        //     myHousing = housingSum
        //     props.setCategoryExpensesProps({
        //         ...props.categoryExpensesProps, totals: { ...housingTotal, expenseCat: myHousing }
        //     })
        // })

        const housingExpenses = props.allExpensesProps.filter((item) =>
            item.category == "housing"
        )
        let housingSum = 0
        housingExpenses.forEach(element => {
            housingSum = housingSum + Number(element.amount);
        })
        let {totals:{housing:myHousing}} = props.categoryExpensesProps
        let {totals:housingTotal} = props.categoryExpensesProps
        myHousing = housingSum
        props.setCategoryExpensesProps({
            ...props.categoryExpensesProps, totals:{...housingTotal, housing:myHousing}  
        })
        
       
        // console.log(props.categoryExpensesProps)

        const foodExpenses = props.allExpensesProps.filter((item) =>
            item.category == "food"
        )
        let foodSum = 0
        foodExpenses.forEach(element => {
            foodSum = foodSum + Number(element.amount);
        })
        let {totals:{food:myFood}} = props.categoryExpensesProps
        let {totals:foodTotal} = props.categoryExpensesProps
        myFood = foodSum
        props.setCategoryExpensesProps({
            ...props.categoryExpensesProps, totals:{...foodTotal, food:myFood}  
        })


        const insuranceExpenses = props.allExpensesProps.filter((item) =>
            item.category == "insurance"
        )
        let insuranceSum = 0
        insuranceExpenses.forEach(element => {
            insuranceSum = insuranceSum + Number(element.amount);
        })
        let {totals:{insurance:myInsurance}} = props.categoryExpensesProps
        let {totals:insuranceTotal} = props.categoryExpensesProps
        myInsurance = insuranceSum
        props.setCategoryExpensesProps({
            ...props.categoryExpensesProps, totals:{...insuranceTotal, insurance:myInsurance}  
        })


        const personalSpendingExpenses = props.allExpensesProps.filter((item) =>
            item.category == "personal spending"
        )
        let spendingSum = 0
        personalSpendingExpenses.forEach(element => {
            spendingSum = spendingSum + Number(element.amount);
        })
        let {totals:{personalSpending:mySpending}} = props.categoryExpensesProps
        let {totals:personalSpendingTotal} = props.categoryExpensesProps
        mySpending = spendingSum
        props.setCategoryExpensesProps({
            ...props.categoryExpensesProps, totals:{...personalSpendingTotal, personalSpending:mySpending}  
        })


        const savingsExpenses = props.allExpensesProps.filter((item) =>
            item.category == "savings"
        )
        let savingSum = 0
        savingsExpenses.forEach(element => {
            savingSum = savingSum + Number(element.amount);
        })
        let {totals:{savings:mySavings}} = props.categoryExpensesProps
        let {totals:savingsTotal} = props.categoryExpensesProps
        mySavings = savingSum
        props.setCategoryExpensesProps({
            ...props.categoryExpensesProps, totals:{...savingsTotal, savings:mySavings}  
        })


        const sideProjectExpenses = props.allExpensesProps.filter((item) =>
            item.category == "side projects"
        )
        let sideProjSum = 0
        sideProjectExpenses.forEach(element => {
            sideProjSum = sideProjSum + Number(element.amount);
        })
        let {totals:{sideProjects:mySideProj}} = props.categoryExpensesProps
        let {totals:sideProjTotal} = props.categoryExpensesProps
        mySideProj = sideProjSum
        props.setCategoryExpensesProps({
            ...props.categoryExpensesProps, totals:{...sideProjTotal, sideProjects:mySideProj}  
        })
        // console.log(sideProjectExpenses)
    }



    useEffect(updateCategoryTotals, [props.allExpensesProps])
    const handleChange = (e) => {
        const { name, value } = e.target
        // console.log(props.elistProps)
        props.seteListProps({
            ...props.elistProps,
            [name]: value
        })

    }

    // const handleRemove = (key) => {
    //     props.setAllExpensesProps(props.allExpensesProps.filter((ex) => props.allExpensesProps.indexOf(ex) !== key))
    //   }


    return (
        <div className="theExpenses">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={props.elistProps.name}
                    placeholder="name"
                    onChange={handleChange} required/>
                <input
                    type="number"
                    name="amount"
                    value={props.elistProps.amount}
                    placeholder="Spending Amount"
                    onChange={handleChange} required/>
                <input
                    type="date"
                    name="month"
                    value={props.elistProps.month}
                    placeholder="Month"
                    onChange={handleChange} required/>
                {/* <input type="text"
                    name="category"
                    onChange={handleChange}
                /> */}
                {/* <label>Choose a category:</label> */}
                <select onChange={handleChange} name="category" placeholder="Category" required>
                    <option value={props.elistProps.cate}></option>
                    <option value={props.elistProps.cate}>housing</option>
                    <option value={props.elistProps.cate}>food</option>
                    <option value={props.elistProps.cate}>insurance</option>
                    <option value={props.elistProps.cate}>personal spending</option>
                    <option value={props.elistProps.cate}>savings</option>
                    <option value={props.elistProps.cate}>side projects</option>
                </select>
                <button type="submit">
                    Add Expenses
                </button>
            </form>
            <ul className="expenseUl">
                {
                    props.allExpensesProps.map((item, key) => {
                        return (
                            <li key={key}>
                                <h2>{item.name } ${item.amount } {item.month}  </h2>
                                {/* <p>${item.amount}</p>
                                {item.month} */}
                                {/* <h6>{item.category}</h6> */}
                                <button className="X-button" onClick={() => {
                                    let expenses = [...props.allExpensesProps]
                                 expenses.splice(key,1)
                                    //  console.log(expenses)
                                     props.setAllExpensesProps(expenses)
                                    // props.setAllExpensesProps(props.allExpensesProps.filter((ex) => props.allExpensesProps.indexOf(ex) !== key))
                                    // conole.log(props.allExpensesProps)
                                }
                                }>X</button>
                                {/* <input type="button" value="remove" onClick={() => {handleRemove(key)}} /> */}
                                
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )

}

export default Expense;

