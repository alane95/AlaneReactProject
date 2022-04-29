

const Expense = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        props.setAllExpensesProps([
            ...props.allExpensesProps, props.elistProps
        ])
        console.log(props.allExpensesProps)
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(props.elistProps)
        props.seteListProps({
            ...props.elistProps,
            [name]: value
        })

    }

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
                    type="datetime-local"
                    name="month"
                    value={props.elistProps.month}
                    placeholder="Month"
                    onChange={handleChange} />
                {/* <input type="text"
                    name="category"
                    onChange={handleChange}
                /> */}
                {/* <label>Choose a category:</label> */}
                <select >
                    <option value={props.elistProps.cate}></option>
                    
                </select>
                <button type="submit">
                    Add Expenses
                </button>
            </form>
            <ul>
                {
                    props.allExpensesProps.map((item) => {
                        return (
                            <li>
                               <h2>{item.name}</h2> 
                                <p>${item.amount}</p>
                                {item.month}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

}

export default Expense;

