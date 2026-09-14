const API_URL = "/api/expenses";

// Load all expenses
async function loadExpenses() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to load expenses");
        }

        const expenses = await response.json();

        const list = document.getElementById("expenseList");
        list.innerHTML = "";

        expenses.forEach(expense => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${expense.id}</td>
                <td>${expense.title}</td>
                <td>₹ ${Number(expense.amount).toFixed(2)}</td>
                <td>${expense.category}</td>
                <td>${expense.date || "-"}</td>
                <td>
                    <button onclick="editExpense(${expense.id})">
                        Edit
                    </button>

                    <button onclick="deleteExpense(${expense.id})">
                        Delete
                    </button>
                </td>
            `;

            list.appendChild(row);
        });

        await loadTotalExpenses();

    } catch (error) {
        console.error("Error loading expenses:", error);
    }
}


// Load total expenses
async function loadTotalExpenses() {
    try {
        const response = await fetch(`${API_URL}/total`);

        if (!response.ok) {
            throw new Error("Failed to load total");
        }

        const total = await response.json();

        document.getElementById("totalExpenses").textContent =
            Number(total).toFixed(2);

    } catch (error) {
        console.error("Error loading total expenses:", error);
    }
}


// Add expense
async function addExpense() {

    const title =
        document.getElementById("title").value.trim();

    const amount =
        Number(document.getElementById("amount").value);

    const category =
        document.getElementById("category").value;

    const date =
        document.getElementById("date").value;


    if (!title) {
        alert("Please enter expense title");
        return;
    }

    if (!amount || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }

    if (!category) {
        alert("Please select a category");
        return;
    }

    if (!date) {
        alert("Please select a date");
        return;
    }


    try {

        const response = await fetch(API_URL, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                title: title,
                amount: amount,
                category: category,
                date: date
            })
        });


        if (!response.ok) {
            throw new Error("Failed to add expense");
        }


        alert("Expense added successfully!");


        // Clear form
        document.getElementById("title").value = "";
        document.getElementById("amount").value = "";
        document.getElementById("category").value = "";
        document.getElementById("date").value = "";


        // Refresh
        await loadExpenses();

    } catch (error) {

        console.error("Error adding expense:", error);

        alert("Error adding expense");
    }
}


// Delete expense
async function deleteExpense(id) {

    const confirmDelete =
        confirm("Are you sure you want to delete this expense?");

    if (!confirmDelete) {
        return;
    }


    try {

        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });


        if (!response.ok) {
            throw new Error("Failed to delete expense");
        }


        alert("Expense deleted successfully!");

        await loadExpenses();

    } catch (error) {

        console.error("Error deleting expense:", error);

        alert("Error deleting expense");
    }
}


// Edit expense
async function editExpense(id) {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to load expense");
        }

        const expenses = await response.json();

        const expense =
            expenses.find(item => item.id === id);


        if (!expense) {
            alert("Expense not found");
            return;
        }


        const newTitle =
            prompt("Enter expense title:", expense.title);

        if (newTitle === null) {
            return;
        }


        const newAmount =
            prompt("Enter amount:", expense.amount);

        if (newAmount === null) {
            return;
        }


        const newCategory =
            prompt("Enter category:", expense.category);

        if (newCategory === null) {
            return;
        }


        const newDate =
            prompt("Enter date (YYYY-MM-DD):", expense.date || "");

        if (newDate === null) {
            return;
        }


        if (
            !newTitle.trim() ||
            Number(newAmount) <= 0 ||
            !newCategory.trim() ||
            !newDate.trim()
        ) {
            alert("Please enter valid details");
            return;
        }


        const updateResponse =
            await fetch(`${API_URL}/${id}`, {

                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    title: newTitle.trim(),
                    amount: Number(newAmount),
                    category: newCategory.trim(),
                    date: newDate.trim()
                })
            });


        if (!updateResponse.ok) {
            throw new Error("Failed to update expense");
        }


        alert("Expense updated successfully!");

        await loadExpenses();

    } catch (error) {

        console.error("Error updating expense:", error);

        alert("Error updating expense");
    }
}


// Load custom categories
function loadCategories() {

    const categories =
        JSON.parse(
            localStorage.getItem("customCategories")
        ) || [];


    const categorySelect =
        document.getElementById("category");


    categories.forEach(category => {

        const option =
            document.createElement("option");

        option.value = category;

        option.textContent = category;

        categorySelect.appendChild(option);
    });
}


// Add custom category
function addCustomCategory() {

    const categoryName =
        prompt("Enter new category:");


    if (!categoryName || categoryName.trim() === "") {
        return;
    }


    const category =
        categoryName.trim();


    let categories =
        JSON.parse(
            localStorage.getItem("customCategories")
        ) || [];


    if (categories.includes(category)) {

        alert("Category already exists!");

        return;
    }


    categories.push(category);


    localStorage.setItem(
        "customCategories",
        JSON.stringify(categories)
    );


    const categorySelect =
        document.getElementById("category");


    const option =
        document.createElement("option");


    option.value = category;

    option.textContent = category;


    categorySelect.appendChild(option);

    categorySelect.value = category;


    alert("Category added successfully!");
}


// Start application
loadCategories();
loadExpenses();