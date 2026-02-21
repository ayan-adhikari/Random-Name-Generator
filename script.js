//Sends a console.log when page loads
window.addEventListener(`load`, pageLoaded)
function pageLoaded()
{
    console.log(`Page loaded`)
}
//Functions
  //Function to generate random number from min to max (including min and max)
  function generateRandomNumber(min, max) 
  {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function generateName()
  {
    text.textContent = `Name generation is currently unavailable.`
  }

//Assigning elements to variables
const text = document.getElementById(`text`)
const generateButton = document.getElementById(`generate`)
//Event listeners
generateButton.addEventListener(`click`, generateName)
