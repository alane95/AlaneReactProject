const Budget = (props) => {

    const handleChange = (e) => {
        const { name, value } = e.target
        // console.log(props.bitemProps)
        props.setbItemProps({
            ...props.bitemProps,
            [name]: value
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.setbListProps([
            ...props.blistProps, props.bitemProps
        ])
    //     console.log(props.blistPropps)
    }
   
    return (
        <div className="budgeting">
          <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={props.bitemProps.name}
                    placeholder="name"
                    onChange={handleChange} />
                <input
                    type="number"
                    name="amount"
                    value={props.bitemProps.amount}
                    placeholder="Spending Amount"
                    onChange={handleChange} />
                <input
                    type="month"
                    name="month"
                    value={props.bitemProps.month}
                    placeholder="Month"
                    onChange={handleChange} />
                <button type="submit">
                    Add Budget
                </button>
            </form>
            <ul>
                {
                   props.blistProps.map((item) => {
                        return (
                            <li>
                                {item.name}
                                {item.amount}
                                {item.month}
                            </li>
                        )
                    })
                }
            </ul>   
            
          
        </div>
    )

}

export default Budget;

// use modal react 
// form box
