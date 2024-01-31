import {createContext, ReactNode, useReducer} from "react";


// Main context which will be used to get and set expenses data
export const ExpensesContext = createContext<ExpensesContextType>({
    expenses: [],
    addExpense: ({description, amount, date}) => {
    },
    deleteExpense: (id) => {
    },
    updateExpense: (id, {description, amount, date}) => {
    }
})


function expenseReducer(state: Expense[], action: { type: string, payload: any }): Expense[] {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{id, ...action.payload}, ...state]
        case 'UPDATE':
            return state.map((expense) => {
                return expense.id === action.payload.id ? {id: expense.id, ...action.payload.data} : expense
            })
        case 'DELETE':
            return state.filter(expense => expense.id !== action.payload)
        default:
            return state

    }
}


export default function ExpenseContextProvider({children}: { children: ReactNode }) {
    const [expenses, dispatch] = useReducer(expenseReducer, []);

    function addExpense(expenseData: Omit<Expense, 'id'>) {
        dispatch({type: 'ADD', payload: expenseData});
    }

    function deleteExpense(id: string) {
        dispatch({type: 'DELETE', payload: id});
    }

    function updateExpense(id: string, expenseData: Omit<Expense, 'id'>) {
        dispatch({type: 'UPDATE', payload: {id, data: expenseData}});
    }

    const value: ExpensesContextType = {
        expenses, addExpense, deleteExpense, updateExpense
    }

    return <ExpensesContext.Provider value={value}>
        {children}
    </ExpensesContext.Provider>
}

