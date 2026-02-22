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
  //function to generate name
  function generateName()
  {
    text.textContent = `Name generation is currently unavailable.`
  }
  //Function to set category
  function setCategory(x)
  {
    //Set category variable to x (category) 
    category = x
    //Remove selectees class from all buttons 
    regularButton.classList.remove(`selected`)
    fantasyButton.classList.remove(`selected`)
    scifiButton.classList.remove(`selected`)
    famousPeopleButton.classList.remove(`selected`)
    //Add selected to the button that was selected 
    if (category == `regular`)
    {
      regularButton.classList.add(`selected`)
      console.log(`Category set to: ${category}`)
    }
    else if (category == `fantasy`)
    {
      fantasyButton.classList.add(`selected`)
      console.log(`Category set to: ${category}`)
    }
    else if (category == `scifi`)
    {
      scifiButton.classList.add(`selected`)
      console.log(`Category set to: ${category}`)
    }
    else if (category == `famousPeople`)
    {
      famousPeopleButton.classList.add(`selected`)
      console.log(`Category set to: ${category}`)
    }
  }
//Variables
let category;
//Assigning elements to variables
const text = document.getElementById(`text`)
const generateButton = document.getElementById(`generate`)

const regularButton = document.getElementById(`regular`)
const fantasyButton = document.getElementById(`fantasy`)
const scifiButton = document.getElementById(`scifi`)
const famousPeopleButton = document.getElementById(`famous-people`)
//Event listeners
generateButton.addEventListener(`click`, generateName)

regularButton.addEventListener(`click`, () => setCategory(`regular`))
fantasyButton.addEventListener(`click`, () => setCategory(`fantasy`))
scifiButton.addEventListener(`click`, () => setCategory(`scifi`))
famousPeopleButton.addEventListener(`click`, () => setCategory(`famousPeople`))

//OBjects to store names
