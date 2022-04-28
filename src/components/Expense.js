

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
        <div className="theExpense">
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
                    type="month"
                    name="month"
                    value={props.elistProps.month}
                    placeholder="Month"
                    onChange={handleChange} />
                <button type="submit">
                    Add Expenses
                </button>
            </form>
            {/* <ul>
                {
                   props.elistProps.map((item) => {
                        return (
                            <li>
                                {item}
                            </li>
                        )
                    })
                }
            </ul> */}
        </div>
    )

}

export default Expense;

