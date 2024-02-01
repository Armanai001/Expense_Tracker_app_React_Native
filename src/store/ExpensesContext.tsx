import {createContext, ReactNode, useEffect, useReducer} from "react";
import {getExpenses, removeExpenses, storeExpenses, updateExpenses} from "./firebase";


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
            const id = action.payload.id
            return [{id, ...action.payload.expenseData}, ...state]
        case 'UPDATE':
            return state.map((expense) => {
                return expense.id === action.payload.id ? {id: expense.id, ...action.payload.data} : expense
            })
        case 'DELETE':
            return state.filter(expense => expense.id !== action.payload)
        case 'SET':
            return action.payload.reverse()
        default:
            return state

    }
}


export default function ExpenseContextProvider({children}: { children: ReactNode }) {
    const [expenses, dispatch] = useReducer(expenseReducer, []);

    useEffect(() => {
        async function fetchData() {

            try {
                const data = await getExpenses();
                dispatch({type: 'SET', payload: data})
            } catch (err) {
            }
        }

        fetchData()
    }, [])


    async function addExpense(expenseData: Omit<Expense, 'id'>) {
        try {
            const id = await storeExpenses(expenseData)
            dispatch({type: 'ADD', payload: {id, expenseData}});
        } catch (err) {
        }
    }

    async function deleteExpense(id: string) {
        try {
            await removeExpenses(id)
            dispatch({type: 'DELETE', payload: id});
        } catch (err) {
        }
    }

    async function updateExpense(id: string, expenseData: Omit<Expense, 'id'>) {
        try {
            await updateExpenses(id, expenseData)
            dispatch({type: 'UPDATE', payload: {id, data: expenseData}});
        } catch (err) {
        }
    }

    const value: ExpensesContextType = {
        expenses, addExpense, deleteExpense, updateExpense
    }

    return <ExpensesContext.Provider value={value}>
        {children}
    </ExpensesContext.Provider>
}

