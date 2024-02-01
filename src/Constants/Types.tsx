// Interface for expense object
interface Expense {
    id: string;
    description: string;
    amount: number;
    date: Date;
}


// Interface for expense form
interface ExpenseFormInterface {
    amount: string,
    date: string,
    description: string
}


// Interface for expensesContext
interface ExpensesContextType {
    expenses: Expense[];
    addExpense: (expense: Omit<Expense, 'id'>) => void;
    deleteExpense: (id: string) => void;
    updateExpense: (id: string, expenseData: Omit<Expense, 'id'>) => void;
    isLoading: number
}