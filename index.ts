#!  usr/bin/env node

  import inquirer from "inquirer";

let answers = await inquirer.prompt([
  {
    message: "Enter your first number",
    type: "number",
    name: "firstNumber",
  },

  {
    message:"Enter  your second number",
  type:"number",
   name:"secondNumber"
 },

  {
    message:"select one operator to perform operations",
  type:"list",
  name:"operator",
  choices:["Addition","Subtractions" , "Multiplication","Division"]
},

]);

// condtional statments If-Else

if (answers.operator === "Addition")
    {
        console.log(answers.firstNumber + answers. secondNumber);
    }  
    else if (answers.operator === "Subtractions") 
        {
            console.log(answers.firstNumber - answers.secondNumber)
        } 
        else if  (answers.operator === "multiplication") 
            {
                console.log(answers.firstNumber * answers.secondNumber);
                
            }
            else if (answers.operator === "Division")
                {
                    console.log(answers.firstNumber / answers.secondNumber);
                    
                }
                else
                {
                    console.log("invalid input");
                    
                }

        