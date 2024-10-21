const choices = ['rock', "paper", "scisors"];


function randomGenrator()
{ 
    return Math.floor(Math.random() * 3)
}

function getComputerChoice()
{
    return choices[randomGenrator()]
}

console.log( getComputerChoice() )