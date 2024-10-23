# personal-expense-tracker

Project Overview:

The Personal Expense Tracker is a RESTful API designed for managing personal financial records. Users can record their income and expenses, retrieve past transactions, and obtain summaries by category or time period. This API provides a simple interface for tracking financial data, making it easier to manage personal finances effectively.

Features:
Record income and expenses.
Retrieve transaction history.
Update and delete transactions.
Get a summary of total income, expenses, and balance.
Built with Node.js and Express, using SQLite for data storage.
Setup Instructions
Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js: Download Node.js
npm: Comes bundled with Node.js.
SQLite3: If you are using SQLite, make sure to have the SQLite3 package installed (though it typically comes with Node.js).
Clone the Repository
Navigate to the directory where you want to clone the project.
Run the following command in your terminal:
  git clone https://github.com/your-username/personal-expense-tracker.git
Install Dependencies:
Navigate into the project directory:
 cd personal-expense-tracker
Install the necessary dependencies:
 npm install
Set Up the Database:
The application uses SQLite for data storage. A database file will be created automatically when you start the server for the first time.
You can also manually create the database and tables using the provided SQL schema if necessary.
Running the Application:
Start the server by running:
 npm start
By default, the API will be accessible at http://localhost:3000/api

Screenshots:
![Add Transaction](https://github.com/AkhilNimmathota/personal-expense-tracker/blob/main/screenshots/postapi.png)
![Get All Transactions](https://github.com/AkhilNimmathota/personal-expense-tracker/blob/main/screenshots/getapi.png)
![Get Transaction by ID](https://github.com/AkhilNimmathota/personal-expense-tracker/blob/main/screenshots/getbyid.png)
![Update Transaction](https://github.com/AkhilNimmathota/personal-expense-tracker/blob/main/screenshots/putapi.png)
![Delete Transaction](https://github.com/AkhilNimmathota/personal-expense-tracker/blob/main/screenshots/deleteapi.png)
![Get Summary](https://github.com/AkhilNimmathota/personal-expense-tracker/blob/main/screenshots/summaryreport.png)



