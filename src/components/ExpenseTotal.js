

const ExpenseTotal =(props)=> {

    return (
        <div className="expenseTotal">
            <p className="categoryList">{props.categoryProps}</p>
            <div className="inner"></div>
        </div>
    )
}

export default ExpenseTotal