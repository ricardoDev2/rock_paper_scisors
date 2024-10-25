const choices = ['rock', "paper", "scissors"];
var computer
const human = getUserChoice()
const cpu = getComputerChoice()
var humanScore = 0
var cpuScore = 0
console.log(`User choice: ${human}\tCPU choice: ${cpu}`)
play()


function randomGenrator()
{ 
    return Math.floor(Math.random() * 3)
}

function getComputerChoice()
{
    return choices[randomGenrator()]
}

function userOptions()
{
    console.log("Press 0 for Rock")
    console.log("Press 1 for Paper")
    console.log("Press 2 for Scissors")
}

function getUserChoice()
{
    do {
        userOptions()
        var number = prompt()

        if (number < 0 || number > 2)
        {
            console.log("Invalid choice. Try again!")
        }

    } while (number < 0 || number > 2);
    
    return choices[number]
}

function play()
{
    if (human === cpu)
    {
        console.log("IT'S A DRAW!")
    } else if (human === "rock" && cpu === "scissors" || 
               human === "paper" && cpu === "rock" ||
               human === "scissors" && cpu === "paper")
    {
        // Human wins
        humanScore++
        console.log(`Human wins! Score ${humanScore}`)
    }else
    {
        // CPU wins
        cpuScore++
        console.log(`CPU wins! Score ${cpuScore}`)
    }
}

