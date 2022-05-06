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
        const housingExpenses = props.allExpensesProps.filter((item) =>
            item.category == "housing"
        )
        let housingSum = 0
        housingExpenses.forEach(element => {
            housingSum = housingSum + Number(element.amount);
        })
        let {totals:{housing:myHousing}} = props.categoryExpensesProps
        let {totals:myTotals} = props.categoryExpensesProps
        myHousing=housingSum
        props.setCategoryExpensesProps({
            ...props.categoryExpensesProps, totals:{...myTotals, housing:myHousing}  
        })
        console.log(props.categoryExpensesProps)
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
                    onChange={handleChange} />
                <input
                    type="number"
                    name="amount"
                    value={props.elistProps.amount}
                    placeholder="Spending Amount"
                    onChange={handleChange} />
                <input
                    type="date"
                    name="month"
                    value={props.elistProps.month}
                    placeholder="Month"
                    onChange={handleChange} />
                {/* <input type="text"
                    name="category"
                    onChange={handleChange}
                /> */}
                {/* <label>Choose a category:</label> */}
                <select onChange={handleChange} name="category" required>
                    <option value={props.elistProps.cate}></option>
                    <option value={props.elistProps.cate}>housing</option>
                    <option value={props.elistProps.cate}>food</option>
                    <option value={props.elistProps.cate}>insurance</option>
                    <option value={props.elistProps.cate}>personal spending</option>
                    <option value={props.elistProps.cate}>savings</option>
                </select>
                <button type="submit">
                    Add Expenses
                </button>
            </form>
            <ul>
                {
                    props.allExpensesProps.map((item, key) => {
                        return (
                            <li key={key}>
                                <h2>{item.name}</h2>
                                <p>${item.amount}</p>
                                {item.month}
                                {/* <h6>{item.category}</h6> */}
                                <p className="X-button" onClick={() => {
                                    props.setAllExpensesProps(props.allExpensesProps.filter((ex) => props.allExpensesProps.indexOf(ex) !== key))
                                    // conole.log(props.allExpensesProps)
                                }
                                }>X</p>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )

}

export default Expense;

