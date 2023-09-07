/*
1- be able to get data when submitted from the ejs. 
2- once you get it, console.log it first to see if it works.
3- change the ejs file text according to the acquired data. 
*/

import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//Step 1: Run the solution.js file without looking at the code.
//Step 2: You can go to the recipe.json file to see the full structure of the recipeJSON below.
const recipeJSON =
  '[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "taco","name": "Beef Taco","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  }]';

  const data = JSON.parse(recipeJSON);
  // console.log(data[0]);
  // create 3 different variables for chicken, meat beef. get their data from the recipe.JSON
  // and send that data to EJS file as well.
  // there you can use them.

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

// why I can't push to the git? it gives the error: 
/*
! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/HachimanQ/JSON-and-EJS-exercise.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
*/
app.post("/recipe", (req, res) => {
  /*const sent = {
    name: req.body["value"]
  }*/
   
  // change the if statement to switch statement. after that only thing you need to do is to complete step 3. which is:
  // 3- change the ejs file text according to the acquired data. 
  if (req.body.choice == "chicken") {
    var selectedMeatType = ("they chose chicken")  
  } else if (req.body.choice == "beef") {
    var selectedMeatType = ("they chose beef")
  } else if (req.body.choice == "fish") {
    var selectedMeatType = ("they chose fish")
  }
  // send this data to ejs, create an if statement there, if selectedMeatType == beef, the h2 and other texts should change accordlngly.
  // however, I also need to send the other API values like the ingredients, protein etc
  //console.log(selectedMeatType);


  //console.log(req.body.choice);
  //res.send
  //Step 3: Write your code here to make this behave like the solution website.
  //Step 4: Add code to views/index.ejs to use the recieved recipe object.
});




app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
