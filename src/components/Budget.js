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
                    placeholder="Budget name"
                    onChange={handleChange} required/>
                <input
                    type="number"
                    name="amount"
                    value={props.bitemProps.amount}
                    placeholder="Budget Amount"
                    onChange={handleChange} required/>
                <input
                    type="month"
                    name="month"
                    value={props.bitemProps.month}
                    placeholder="Month"
                    onChange={handleChange} required/>
                    
                <button type="submit">
                    Add Budget
                </button>
            </form>
            <ul className="budgetUl">
                {
                    props.blistProps.map((item, key) => {
                        return (
                            <li key={key}>
                               <h2> {item.name } ${item.amount } {item.month} </h2> 
                                {/* <p>${item.amount}</p>
                                {item.month} */}
                                <button className="X-button" onClick={() => {
                                    let budgets = [...props.blistProps]
                                 budgets.splice(key,1)
                                 props.setbListProps(budgets)
                             }
                             }>X</button>
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
