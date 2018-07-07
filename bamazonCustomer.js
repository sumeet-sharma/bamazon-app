var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 5000,
  user: 'root',
  password: 'root',
  database: 'bamazon'
});

connection.connect(function (error) {
  if (error) throw error;
  console.log("Connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("Select * from products", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].items_id + " | " + res[i].product_name + " | $" + res[i].price + " | " + res[i].stock_quantity);
    }
    console.log("-----------------------------------");
    customerPick();
  });
};

function customerPick() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Please enter a valid item id: ',
      name: 'itemChosen'
    },
    {
      type: 'input',
      message: 'Enter the number of units you would like to buy: ',
      name: 'order_quantity'
    }
  ]).then(function (answers) {
    connection.query("SELECT * FROM products WHERE items_id = ?", [answers.itemChosen], function (error, response) {
      if (answers.order_quantity > response[0].stock_quantity) {
        console.log('Insufficient quantity!');
        console.log('Please wait for next shipment to arrive!');
      }
      else {
        connection.query('UPDATE products SET ? WHERE ?', [{
          stock_quantity: response[0].stock_quantity - answers.order_quantity
        },
        {
          items_id: answers.itemChosen
        }]);
        console.log("Your total is: $" + response[0].price * answers.order_quantity);
      };
    });
  });
};
