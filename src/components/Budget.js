import { useEffect } from "react"

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
    }
    const sumBudget = () =>{
        let sum = 0
        props.blistProps.forEach(element => {
            sum = sum + Number(element.amount);
        });
        props.setBudgetSumProps(sum)
        // console.log(props.blistProps)
    
    }
    useEffect(sumBudget, [props.blistProps])

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

export default Budget;

// use modal react 
// form box
