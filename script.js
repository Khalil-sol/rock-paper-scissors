let humanscore = 0
let computerscore = 0


function getComputerChoice() {// Array of words
    const choices = ['rock', 'paper', 'scissors'];
    
    // Generate a random index based on the length of the array
    const randomIndex = Math.floor(Math.random() * choices.length);
    
    // Get the random word from the array using the random index
    const randomChoice = choices[randomIndex];
    return choices[randomIndex]

    
    
    }
    console.log(getComputerChoice());
    function getHumanChoice() {// Array of words
        const choices = ['rock', 'paper', 'scissors'];
        
        // Generate a random index based on the length of the array
        const randomIndex = Math.floor(Math.random() * choices.length);
        
        // Get the random word from the array using the random index
        const randomChoice = choices[randomIndex];
        return choices[randomIndex]
    
        
        
        }
        console.log(getHumanChoice());

        