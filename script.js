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
  //Function to generate name
  function generateName()
  {
    if (category == `regular`)
    {
      randInt = generateRandomNumber(0, names.regular.firstNames.length - 1)
      a = names.regular.firstNames[randInt]
      randInt = generateRandomNumber(0, names.regular.surnames.length - 1)
      b = names.regular.surnames[randInt]
    }
    else if (category == `fantasy`)
    {
      randInt = generateRandomNumber(0, names.fantasy.firstNames.length - 1)
      a = names.fantasy.firstNames[randInt]
      randInt = generateRandomNumber(0, names.fantasy.surnames.length - 1)
      b = names.fantasy.surnames[randInt]
    }
    else if (category == `scifi`)
    {
      randInt = generateRandomNumber(0, names.scifi.firstNames.length - 1)
      a = names.scifi.firstNames[randInt]
      randInt = generateRandomNumber(0, names.scifi.surnames.length - 1)
      b = names.scifi.surnames[randInt]
    }
    else if (category == `famousPeople`)
    {
      randInt = generateRandomNumber(0, names.famousPeople.firstNames.length - 1)
      a = names.famousPeople.firstNames[randInt]
      randInt = generateRandomNumber(0, names.famousPeople.firstNames.length - 1)
      b = names.famousPeople.surnames[randInt]

    }
    console.log(`${a} ${b}`)
    text.textContent = `${a} ${b}`
  }
  //Function to set category
  function setCategory(x)
  {
    //Set category variable to x (category) 
    category = x
    //Remove selected class from all buttons 
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
let category = `regular`;
let randInt
let name;
//Assigning elements to variables
const text = document.getElementById(`text`)
const generateButton = document.getElementById(`generate`)

const regularButton = document.getElementById(`regular`)
const fantasyButton = document.getElementById(`fantasy`)
const scifiButton = document.getElementById(`scifi`)
const famousPeopleButton = document.getElementById(`famous-people`)
//Event listeners
generateButton.addEventListener(`click`, () => generateName(category))

regularButton.addEventListener(`click`, () => setCategory(`regular`))
fantasyButton.addEventListener(`click`, () => setCategory(`fantasy`))
scifiButton.addEventListener(`click`, () => setCategory(`scifi`))
famousPeopleButton.addEventListener(`click`, () => setCategory(`famousPeople`))

//Objects to store names
const names = {
  regular: {
    firstNames: [
  "John", "Emily", "Michael", "James", "David", "Robert", "William", "Christopher", "Joseph", "Daniel",
  "Matthew", "Thomas", "Richard", "Anthony", "Charles", "Joshua", "Andrew", "Mark", "Steven", "Kevin",
  "Brian", "George", "Edward", "Paul", "Timothy", "Ronald", "Kenneth", "Jason", "Jeffrey", "Ryan",
  "Jacob", "Nicholas", "Eric", "Jonathan", "Brandon", "Justin", "Scott", "Benjamin", "Samuel", "Gregory",
  "Alexander", "Patrick", "Frank", "Stephen", "Raymond", "Jack", "Dennis", "Jerry", "Tyler", "Aaron",
  "Jose", "Henry", "Adam", "Nathan", "Douglas", "Peter", "Zachary", "Kyle", "Walter", "Harold", "Jeremy",
  "Christian", "Keith", "Roger", "Noah", "Lawrence", "Terry", "Sean", "Austin", "Arthur", "Carl", "Bruce",
  "Jordan", "Jesse", "Bryan", "Billy", "Joe", "Ethan", "Albert", "Willie", "Gabriel", "Logan", "Alan",
  "Juan", "Wayne", "Roy", "Ralph", "Randy", "Philip", "Louis", "Vincent", "Bobby", "Johnny", "Dylan",
  "Victor", "Russell", "Elijah", "Mason", "Clarence", "Eugene", "Manuel", "Ray", "Stanley", "Leonard",
  "Oscar", "Andre", "Martin", "Ernest", "Theodore", "Caleb", "Connor", "Cameron", "Cole", "Travis",
  "Derek", "Corey", "Shawn", "Edwin", "Antonio", "Miguel", "Dominic", "Chad", "Troy", "Blake",
  "Seth", "Lucas", "Hunter", "Owen", "Diego", "Carlos", "Jesus", "Adrian", "Ivan", "Jaden", "Jayden",
  "Isaiah", "Levi", "Max", "Julian", "Gavin", "Evan", "Aiden", "Brayden", "Cody", "Colton", "Damian",
  "Dustin", "Grant", "Hayden", "Jorge", "Kaleb", "Liam", "Marcus", "Micah", "Nolan", "Preston", "Riley",
  "Spencer", "Trevor", "Wyatt", "Ashton", "Brody", "Carter", "Cooper", "Dakota", "Devin",
  "Elias", "Emmanuel", "Finn", "Grayson", "Harrison", "Jaxon", "Josiah", "Kingston", "Landon", "Malachi",
  "Miles", "Parker", "Roman", "Sawyer", "Silas", "Trenton", "Tyson", "Zane", "Amelia", "Ava", "Sophia",
  "Isabella", "Mia", "Charlotte", "Olivia", "Abigail", "Madison", "Ella", "Grace", "Chloe", "Victoria",
  "Natalie", "Hannah", "Samantha", "Sarah", "Elizabeth", "Ashley", "Taylor", "Jessica", "Lauren", "Kayla",
  "Anna", "Megan", "Rachel", "Julia", "Katherine", "Nicole", "Alexis", "Brianna", "Hailey", "Lily",
  "Addison", "Brooklyn", "Zoe", "Savannah", "Allison", "Alyssa", "Claire", "Gabriella", "Kylie", "Leah",
  "Lucy", "Maya", "Nevaeh", "Skylar", "Stella", "Violet", "Audrey", "Caroline", "Ellie", "Hazel", "Layla",
  "Lillian", "Madeline", "Naomi", "Penelope", "Ruby", "Scarlett", "Sofia", "Sydney", "Trinity",
  "Paisley", "Autumn", "Serenity", "Bella", "Kennedy", "Genesis", "Ariana", "Allie", "Cora", "Eva",
  "Sadie", "Peyton", "Bailey", "Melanie", "Paislee", "Hadley", "Jasmine", "Morgan", "Reagan", "Valeria",
  "Isla", "Elena", "Clara", "Vivian", "Aria", "Camila", "Delilah", "Lydia", "Norah", "Faith",
  "Angela", "Hope", "Ivy", "Paisleigh", "Emery", "Adeline", "Catalina", "Daisy", "Georgia", "Harmony",
  "June", "Kinsley", "Laila", "Margaret", "Nora", "Phoebe", "Rosalie", "Tessa", "Willa", "Amara",
  "Blair", "Celeste", "Diana", "Esme", "Fiona", "Genevieve", "Helena", "Iris", "Jade", "Kendall",
  "Lana", "Mabel", "Nina", "Ophelia", "Paige", "Quinn", "Ruth", "Selena", "Talia", "Uma",
  "Veronica", "Wren", "Ximena", "Yara", "Zara", "Alana", "Bianca", "Camille", "Daphne", "Elise",
  "Francesca", "Gloria", "Hallie", "Ingrid", "Joy", "Keira", "Lucia", "Miriam", "Noelle", "Odette",
  "Anastasia", "Beatrice", "Callie", "Eleanor", "Florence", "Gianna", "Harper", "Isabel", "Jocelyn",
  "Kara", "Lennon", "Mila", "Nadia", "Quincy", "Rosa", "Sienna", "Tiffany",
  "Umaira", "Valentina", "Wendy", "Xavier", "Yasmine", "Zion", "Alec", "Bruno", "Cyrus", "Damien",
  "Ezekiel", "Felix", "Gideon", "Hugo", "Ibrahim", "Jonah", "Kai", "Lorenzo", "Matteo", "Nikolai",
  "Omar", "Paolo", "Quentin", "Raphael", "Stefan", "Thiago", "Ulysses", "Wesley", "Xander",
  "Yusuf", "Zeke", "Alessia", "Bria", "Celina", "Dahlia", "Elodie", "Farrah", "Greta", "Helene",
  "Ivanna", "Janelle", "Karina", "Lilith", "Marina", "Nola", "Odessa", "Paloma", "Renee", "Sabrina",
  "Tatiana", "Ursula", "Vanessa", "Whitney", "Xenia", "Yvette", "Zelda", "Arielle", "Belen", "Cleo",
  "Daria", "Estelle", "Frida", "Giselle", "Hana", "Iliana", "Jemma", "Kelsey", "Liora", "Mona",
  "Nayeli", "Orla", "Perla", "Raquel", "Selah", "Teresa", "Una", "Valora", "Wilma", "Xochitl",
  "Zahra", "Andres", "Bastian", "Cristian", "Emilio", "Francisco", "Guillermo", "Hector",
  "Isaias", "Javier", "Luis", "Nestor", "Orlando", "Pablo", "Rafael", "Sergio", "Tomas",
  "Ulises", "Vicente", "Wilfredo", "Ximeno", "Yahir", "Zacarias", "Arjun", "Bhavin", "Chirag", "Dev",
  "Eshan", "Farhan", "Gopal", "Harsh", "Indra", "Jay", "Kiran", "Laksh", "Manav", "Nikhil",
  "Omkar", "Pranav", "Rohan", "Sanjay", "Tarun", "Umesh", "Varun", "Waseem", "Xavian", "Yash",
  "Zubin", "Aiko", "Botan", "Chiyo", "Daichi", "Emi", "Fumiko", "Genji", "Haruto", "Itsuki",
  "Jun", "Kana", "Leiko", "Minato", "Naoki", "Osamu", "Ren", "Sakura", "Takumi", "Akira", "Ayaka", "Chika", "Daigo", "Eri", "Fuyuki", "Hikari", "Ichiro", "Junpei"
  ],
  surnames:[
  "Smith", "Brown", "Johnson", "Williams", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
  "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
  "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
  "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
  "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts",
  "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes",
  "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Morgan", "Cooper",
  "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson",
  "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes",
  "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez",
  "Powell", "Jenkins", "Perry", "Russell", "Sullivan", "Bell", "Coleman", "Butler", "Henderson", "Barnes",
  "Gonzales", "Fisher", "Vasquez", "Simmons", "Romero", "Jordan", "Patterson", "Alexander", "Hamilton", "Graham",
  "Reynolds", "Griffin", "Wallace", "Moreno", "West", "Cole", "Hayes", "Bryant", "Herrera", "Gibson",
  "Ellis", "Tran", "Medina", "Aguilar", "Stevens", "Murray", "Ford", "Castro", "Marshall", "Owens",
  "Harrison", "Fernandez", "McDonald", "Woods", "Washington", "Kennedy", "Wells", "Vargas", "Henry", "Chen",
  "Freeman", "Mayo", "Simpson", "Palmer", "Holmes", "Stone", "Mills", "Nichols", "Grant", "Knight",
  "Ferguson", "Rose", "Hawkins", "Dunn", "Spencer", "Hudson", "Arnold", "Wagner", "Willis", "Ray",
  "Watkins", "Olson", "Carroll", "Duncan", "Snyder", "Hart", "Porter", "Hunter", "Hicks", "Weaver",
  "Fox", "Bryan", "Riley", "Shaw", "Gordon", "Rice", "Robertson", "French", "Chapman",
  "Lawrence", "Beck", "Bishop", "Mason", "Day", "Dean", "Schmidt", "Daniels",
  "Franklin", "Lawson", "Carr", "Little", "Meyer", "Harmon", "Weber", "Larson", "Carlson", "Harper",
  "Greene", "Burke", "Soto", "Abbott", "Acevedo", "Aguirre", "Alston", "Armstrong", "Atkins", "Ball", "Barber", "Barker", "Bass",
  "Black", "Blair", "Bolton", "Boone", "Bowman", "Boyd", "Brady", "Briggs", "Brock", "Burns",
  "Bush", "Byrd", "Cain", "Cameron", "Cannon", "Casey", "Chambers", "Chang", "Christensen", "Clarke",
  "Clements", "Conner", "Conway", "Craig", "Cross", "Curtis", "Dalton", "Davidson", "Delgado", "Dennis",
  "Dominguez", "Douglas", "Drake", "Duarte", "Duffy", "Duke", "Elliott", "Emerson", "Escobar", "Estrada",
  "Fleming", "Floyd", "Fuller", "Gaines", "Gallagher", "Glass", "Golden", "Goodman",
  "Graves", "Greer", "Grimes", "Gross", "Hampton", "Hansen", "Hardy", "Harrington", "Hartman", "Hester",
  "Hodge", "Hoover", "Horn", "House", "Hubbard", "Huff", "Ingram", "Irwin", "Jacobs", "Jennings",
  "Johnston", "Keller", "Kelley", "Kerr", "Khan", "Klein", "Kramer", "Lambert", "Landry", "Lang",
  "Lara", "Leach", "Leon", "Levine", "Li", "Lin", "Livingston", "Lloyd", "Logan", "Lozano",
  "MacDonald", "Shepherd", "Whitaker", "Holloway", "Pratt", "Stokes", "Calderon", "Rosales", "Valdez", "Pineda",
  "Solomon", "Bright", "Snow", "Meadows", "Shepard", "Browning", "Hurst", "Merritt", "Vega", "Pugh",
  "Randall", "Hutchinson", "Hines", "Wilcox", "Boyle", "Pope", "Kirk", "Donaldson", "Maddox", "Sheldon",
  "Jarvis", "Justice", "Kane", "Kaufman", "Keith", "Kemp", "Kendall", "Kent", "Kerrigan", "Kessler",
  "Lamb", "Landers", "Langston", "Larkin", "Law", "Layton", "Leary", "Ledbetter", "Lester", "Light",
  "Lindsey", "Linton", "Littleton", "Lockhart", "Lombardi", "London", "Lovell", "Lowry", "Luna", "Luther",
  "Macias", "Mack", "Madden", "Madrid", "Mahoney", "Major", "Malone", "Manning", "Marquez", "Marsh",
  "Mathis", "Mathews", "Matthews", "Maxwell", "Maynard", "McBride", "McCall", "McCann", "McCarthy", "McClain",
  "McConnell", "McCormick", "McCoy", "McCray", "McCullough", "McDaniel", "McDowell", "McFadden", "McFarland", "McGee",
  "McGowan", "McGuire", "McIntosh", "McKay", "McKee", "McKenzie", "McKinney", "McKnight", "McLean", "McMahon",
  "McMillan", "McNeil", "McPherson", "Mercer", "Merrill", "Middleton", "Miles", "Milligan", "Milton", "Miranda",
  "Montgomery", "Montoya", "Moody", "Moon", "Moreland", "Morrison", "Morton", "Moses", "Mosley", "Moss",
  "Moyer", "Mueller", "Munoz", "Murillo", "Nash", "Navarro", "Neal", "Newman", "Newton", "Nixon",
  "Noble", "Nolan", "Norman", "Norris", "Nunez", "Ochoa", "Odom", "Olsen", "Ortega", "Orton", "Osborn",
  "Padilla", "Parsons", "Peck", "Pena", "Pennington", "Perkins", "Peters", "Petty", "Pickett", "Pierce",
  "Pittman", "Pollard", "Ponce", "Portillo", "Potter", "Powers", "Prince", "Pruitt", "Quintero", "Rangel",
  "Rasmussen", "Ratliff", "Reeves", "Reilly", "Renteria", "Reynoso", "Rhodes", "Riggs", "Rios", "Roach",
  "Robles", "Roche", "Rojas", "Rollins", "Roman", "Rosario", "Rowe", "Rupert", "Salas", "Salinas",
  "Sampson", "Sandoval", "Santana", "Santiago", "Santos", "Sargent", "Saunders", "Savage",
  ]
},
  fantasy: {
    firstNames: [
  "Aelion", "Lyra", "Thorin", "Elara", "Kaelen", "Seraphina", "Draven",
  "Isolde", "Fenris", "Rowan", "Sylvara", "Orin", "Elysia", "Galen",
  "Mirael", "Taranis", "Velora", "Zephyra", "Alaric", "Nyssa",
  "Corvin", "Faelan", "Liora", "Dorian", "Eira", "Malrik", "Selene",
  "Caelum", "Arwen", "Lucian", "Thalindra", "Evander", "Maelis",
  "Rhiannon", "Korrin", "Astraea", "Brynjar", "Elowen", "Cerys",
  "Varian", "Nerissa", "Oberon", "Calista", "Eryndor", "Meliora",
  "Kaelith", "Aveline", "Zorion", "Iskander", "Seren", "Morwen",
  "Althea", "Eldric", "Veyra", "Cassian", "Ilyana", "Torin", "Amara",
  "Fenella", "Darius", "Sylas", "Eowyn", "Leif", "Thessaly", "Corwyn",
  "Ariadne", "Orlaith", "Zephyr", "Maelor", "Elira", "Tirian", "Nysa",
  "Aedric", "Soraya", "Valen", "Elarion", "Kael", "Lyric", "Thessan",
  "Auriel", "Riven", "Ishtar", "Caius", "Evelora", "Morrigan", "Talon",
  "Aurelia", "Drystan", "Selwyn", "Erya", "Veylin", "Alariel", "Nyx",
  "Coralia", "Faelith", "Lorien", "Delyth", "Eryon", "Maevra",
  "Aeris", "Balthor", "Cindrel", "Daelith", "Eryndra", "Faelora", "Gryphon",
  "Halion", "Ithriel", "Jorath", "Kaelwyn", "Luthien", "Morric", "Nerion",
  "Orlith", "Phaedra", "Quenric", "Rhiannon", "Sylvaris", "Tirion",
  "Ulric", "Valora", "Weylin", "Xerath", "Ysolde", "Zephriel", "Aelric",
  "Branwyn", "Calyth", "Dorian", "Elandra", "Feyra", "Galenor", "Hestia",
  "Isolde", "Jareth", "Korrin", "Liora", "Maelor", "Nyxen", "Oberis",
  "Perwyn", "Quorra", "Riven", "Selwyn", "Thalor", "Uther", "Veyra",
  "Wystan", "Xyra", "Yvaris", "Zorion", "Aveline", "Bryndis", "Caelum",
  "Delyth", "Eowyn", "Fenric", "Grendel", "Haldor", "Illyra", "Jovian",
  "Kestrel", "Lyric", "Meliora", "Nerissa", "Orion", "Peregrine", "Quintis",
  "Rowan", "Seraphiel", "Taranis", "Urien", "Valen", "Wrenna", "Xandros",
  "Ysara", "Zyric", "Althaea", "Brynjar", "Cerys", "Drystan", "Eira",
  "Faelan", "Gwyndor", "Helion", "Ilyana", "Kaelen", "Lucian", "Morrigan",
  "Nysa", "Orrick", "Pharos", "Quillian", "Rhiannon", "Sylas", "Thessaly",
  "Uldric", "Veylin", "Wolfram", "Xanthos"
],
    surnames: [
  "Moonshade", "Stormborn", "Oakshield", "Dragonbane", "Silverleaf",
  "Nightwhisper", "Starfall", "Shadowmere", "Brightblade", "Ironfist",
  "Windrider", "Duskbane", "Frostfang", "Sunstrider", "Darkwater",
  "Emberheart", "Stonehelm", "Whisperwind", "Bloodthorn", "Skybreaker",
  "Mistwalker", "Shadowthorn", "Lightbringer", "Stormweaver", "Firebrand",
  "Wolfbane", "Dawnseeker", "Grimward", "Icefang", "Thunderstrike",
  "Ravencrest", "Shadowfang", "Silvermoon", "Stormcaller", "Ironheart",
  "Nightbane", "Starweaver", "Frostborn", "Windwalker", "Shadowcaster",
  "Brightstar", "Moonfang", "Stormfang", "Darkbane", "Sunblade",
  "Stonebreaker", "Shadowblade", "Frosthelm", "Emberfang", "Skywatcher",
  "Stormfang", "Nightshade", "Starbane", "Ironfang", "Moonwhisper",
  "Shadowborn", "Stormhelm", "Frostfang", "Sunfang", "Darkfang",
  "Brightfang", "Stonefang", "Emberfang", "Windfang", "Skyfang",
  "Wolfshade", "Dragonfang", "Ravenfang", "Bloodfang", "Mistfang",
  "Thunderfang", "Lightfang", "Shadowfang", "Stormfang", "Frostfang",
  "Moonfang", "Sunfang", "Starfang", "Ironfang", "Stonefang", "Emberfang",
  "Windfang", "Skyfang", "Wolffang", "Dragonfang", "Ravenfang", "Bloodfang",
  "Mistfang", "Thunderfang", "Lightfang",
  "Ashbane", "Blackthorn", "Cindermere", "Dawnbringer", "Ebonshade",
  "Frostspire", "Gloomveil", "Highwind", "Ironspire", "Jadefang",
  "Kingsbane", "Lighthelm", "Moonveil", "Nightspire", "Oakbane",
  "Pyrestone", "Quickthorn", "Ravenshadow", "Stormspire", "Twilightbane",
  "Umbralhelm", "Veyshade", "Whisperthorn", "Xylenfang", "Yewshade",
  "Zephyrhelm", "Amberfang", "Bloodspire", "Crystalhelm", "Darkthorn",
  "Emberveil", "Flamebane", "Grimspire", "Hollowfang", "Icehelm",
  "Jadeveil", "Keenfang", "Lunarhelm", "Mistthorn", "Netherbane",
  "Obsidianfang", "Palehelm", "Quicksilver", "Runebane", "Shadowspire",
  "Thornveil", "Umbralbane", "Voidfang", "Wraithhelm", "Xylenhelm",
  "Yewbane", "Zephyrfang", "Ashveil", "Brighthelm", "Cloudbane",
  "Dreadthorn", "Ebonfang", "Frostveil", "Gloomfang", "Hallowhelm",
  "Ironveil", "Jadehelm", "Kingsveil", "Lightfang", "Moonhelm",
  "Nightveil", "Oakhelm", "Pyrefang", "Quickhelm", "Ravenveil",
  "Stormfang", "Twilighthelm", "Umbralveil", "Veyfang", "Whisperhelm",
  "Xylenveil", "Yewhelm", "Zephyrveil", "Amberhelm", "Bloodfang",
  "Crystalveil", "Darkhelm", "Emberfang", "Flameveil", "Grimfang",
  "Hollowhelm", "Icefang", "Jadefang", "Keenhelm", "Lunarveil",
  "Misthelm", "Netherfang", "Obsidianhelm", "Paleveil", "Quickfang",
  "Runefang", "Shadowfang", "Thornhelm", "Umbralhelm", "Voidhelm"
]
},
  scifi: {
    firstNames: [
  "Nova", "Zyra", "Kaelon", "Orion", "Xyric", "Aelix", "Cira", "Daxen",
  "Eryx", "Falon", "Grynn", "Helix", "Ixor", "Jorik", "Klyra", "Laziel",
  "Myra", "Nexis", "Orrin", "Pyra", "Quorin", "Rylos", "Syra", "Talon",
  "Ulric", "Veyra", "Wrynn", "Xandar", "Ysera", "Zorion", "Astra", "Bexar",
  "Cypher", "Draven", "Eon", "Flux", "Galen", "Hexa", "Icarus", "Jyn",
  "Korrin", "Lyric", "Mirael", "Nyx", "Oberis", "Pharos", "Quorra", "Riven",
  "Soren", "Tirian", "Urix", "Veylin", "Weyra", "Xylen", "Yvaris", "Zyric",
  "Aelion", "Branix", "Calyx", "Dorian", "Eryndor", "Feyra", "Gravis",
  "Halion", "Iskra", "Jovian", "Kestrel", "Liora", "Maelor", "Nerion",
  "Orlith", "Phaedra", "Quintis", "Rylith", "Selene", "Thalor", "Uther",
  "Valen", "Wystan", "Xerath", "Ysara", "Zyros", "Avelis", "Bryndor",
  "Cindrel", "Daelith", "Elandra", "Fenric", "Gryphon", "Hestia", "Illyra",
  "Jareth", "Kaelen", "Lucian", "Meliora", "Nysa", "Orionis", "Peregrine",
  "Quillian", "Rowan", "Sylas", "Taranis", "Urien", "Veyra", "Wolfram",
  "Xandros", "Ysolde", "Zorath", "Aeris", "Balthor", "Cindros", "Drax",
  "Eira", "Faelan", "Grendel", "Helion", "Ilyana", "Jorath", "Korrin",
  "Lyra", "Morrigan", "Nerissa", "Orrick", "Pharos", "Quorra", "Rhiannon",
  "Sylvara", "Thessaly", "Uldric", "Valora", "Weylin", "Xanthos", "Ysira",
  "Zypher", "Aelric", "Branwyn", "Calyth", "Delyth", "Eowyn", "Fenris",
  "Galenor", "Halix", "Isolde", "Jynx", "Kaelith", "Luthien", "Maevra",
  "Nyxen", "Oberon", "Phaedrus", "Quenric", "Riven", "Selwyn", "Thalindra",
  "Ulric", "Veylin", "Wystan", "Xyra", "Ysera", "Zorion", "Astraea",
  "Brynn", "Cerys", "Drystan", "Evelora", "Faelith", "Gwyndor", "Helios",
  "Icarion", "Jovira", "Kaelwyn", "Lyric", "Mirael", "Nerionis", "Orlithis",
  "Phyrra", "Quorrax", "Rylos", "Seraphiel", "Tirion", "Urion", "Valenor",
  "Weyra", "Xyric", "Ysara", "Zyros"
],
    surnames: [
  "X-42", "Prime", "NovaCore", "Stellarion", "Cryonix", "Hyperion",
  "Quantumis", "Neurox", "Synthar", "Astros", "Vortexis", "Cyberon",
  "Nanix", "Exovian", "Zeratek", "Orbis", "Axion", "Veltrix", "Ionis",
  "Chronos", "Galactis", "Nebrix", "Solaris", "Technar", "Omnix",
  "Plasmor", "Circuitis", "Mechron", "Polaris", "Astralis", "Celestion",
  "Cosmar", "Luminor", "Cryonis", "Spectron", "Photonis", "Graviton",
  "Orbitron", "Stellaris", "Astrovia", "Neutrion", "Exonix", "Cyberis",
  "Nanotron", "Velaris", "Ionix", "Chronaris", "Galaxis", "Nebulon",
  "Solarion", "Technaris", "Omnaris", "Plasmaris", "Circuitron",
  "Mechtron", "Polaron", "Astronix", "Celestix", "Cosmara", "Luminix",
  "Cryonix", "Spectrix", "Photonix", "Gravix", "Orbitix", "Stellaron",
  "Astrovix", "Neutrix", "Exotron", "Cybertron", "Nanixis", "Veltron",
  "Ionaris", "Chronix", "Galactron", "Nebaris", "Solarix", "Technix",
  "Omnixis", "Plasmon", "Circuitrix", "Mechrix", "Polarix", "Astron",
  "Celestara", "Cosmaris", "Luminara", "Cryonara", "Spectara", "Photonara",
  "Gravara", "Orbitara", "Stellara", "Astrovian", "Neutara", "Exonara",
  "Cyberara", "Nanara", "Velara", "Ionara", "Chronara", "Galactara",
  "Nebara", "Solara", "Technara", "Omnara", "Plasmara", "Circuitara",
  "Mechara", "Polara", "Astrara", "Celestara", "Cosmara", "Luminara",
  "Cryonara", "Spectara", "Photonara", "Gravara", "Orbitara", "Stellara",
  "Astrovian", "Neutara", "Exonara", "Cyberara", "Nanara", "Velara",
  "Ionara", "Chronara", "Galactara", "Nebara", "Solara", "Technara",
  "Omnara", "Plasmara", "Circuitara", "Mechara", "Polara", "Astrara",
  "Celestara", "Cosmara", "Luminara", "Cryonara", "Spectara", "Photonara",
  "Gravara", "Orbitara", "Stellara", "Astrovian", "Neutara", "Exonara",
  "Cyberara", "Nanara", "Velara", "Ionara", "Chronara", "Galactara",
  "Nebara", "Solara", "Technara", "Omnara", "Plasmara", "Circuitara",
  "Mechara", "Polara", "Astrara", "Celestara", "Cosmara", "Luminara",
  "Cryonara", "Spectara", "Photonara", "Gravara", "Orbitara", "Stellara"
]
  },
  famousPeople: {
    firstNames: [
  // Scientists & Inventors
  "Albert", "Isaac", "Marie", "Nikola", "Stephen", "Charles", "Galileo",
  "Ada", "Rosalind", "Jane", "Carl", "Richard", "Neil", "Buzz", "Sally",
  "Mae", "Katherine", "Dorothy", "Alan", "Grace",

  // Actors & Actresses
  "Marilyn", "Audrey", "Elizabeth", "Grace", "Sophia", "Ingrid", "Julie",
  "Meryl", "Cate", "Nicole", "Leonardo", "Robert", "Al", "Tom", "Brad",
  "Johnny", "Denzel", "Morgan", "Harrison", "Samuel",

  // Politicians & Leaders
  "Abraham", "George", "Thomas", "Franklin", "John", "Theodore", "Woodrow",
  "Harry", "Dwight", "Lyndon", "Richard", "Gerald", "Jimmy", "Ronald",
  "Bill", "Barack", "Donald", "Joe", "Nelson", "Winston",

  // Activists & Humanitarians
  "Martin", "Malcolm", "Mahatma", "Teresa", "Desmond", "Aung", "Angela",
  "Margaret", "Indira", "Golda", "Jacinda", "Justin", "Emmanuel", "Charles",
  "Elizabeth", "Victoria", "Philip", "Diana", "William", "Harry",

  // TV & Media Personalities
  "Oprah", "Ellen", "David", "Jimmy", "Trevor", "Jon", "Stephen", "Conan",
  "Jay", "Howard", "Larry", "Jerry", "George", "Lucille", "Carol", "Betty",
  "Bob", "Robin", "Whoopi", "Tina",

  // Athletes
  "Michael", "LeBron", "Kobe", "Shaquille", "Larry", "Magic", "Stephen",
  "Kevin", "Lionel", "Cristiano", "Diego", "Pele", "Neymar", "Roger",
  "Rafael", "Novak", "Serena", "Venus", "Naomi", "Billie",

  // Entrepreneurs & Innovators
  "Mark", "Elon", "Steve", "Jeff", "Larry", "Sergey", "Satya", "Tim",
  "Susan", "Sheryl", "Richard", "Warren", "Andrew", "Michael", "Peter",
  "Jack", "Oprah", "Howard", "George", "Bill",

  // Writers & Poets
  "William", "Shakespeare", "Charles", "Dickens", "Jane", "Austen",
  "George", "Orwell", "Virginia", "Woolf", "James", "Joyce", "Ernest",
  "Hemingway", "F. Scott", "Mark", "Twain", "Emily", "Bronte", "Harper",

  // Artists
  "Pablo", "Vincent", "Claude", "Salvador", "Andy", "Frida", "Georgia",
  "Jackson", "Henri", "Leonardo", "Michelangelo", "Raphael", "Donatello",
  "Rembrandt", "Johannes", "Edvard", "Gustav", "Paul", "Marc", "Diego",

  // Musicians
  "Elvis", "Michael", "Prince", "Madonna", "Whitney", "Mariah", "Beyoncé",
  "Taylor", "Adele", "Rihanna", "Kanye", "Jay", "Drake", "Kendrick",
  "Billie", "Harry", "Ed", "Justin", "Selena", "Shakira"
],
    surnames: [
  // Scientists & Inventors
  "Einstein", "Newton", "Curie", "Tesla", "Hawking", "Darwin", "Galilei",
  "Lovelace", "Franklin", "Goodall", "Sagan", "Feynman", "Armstrong",
  "Aldrin", "Ride", "Jemison", "Johnson", "Vaughan", "Turing", "Hopper",

  // Actors & Actresses
  "Monroe", "Hepburn", "Taylor", "Kelly", "Loren", "Bergman", "Andrews",
  "Streep", "Blanchett", "Kidman", "DiCaprio", "De Niro", "Pacino",
  "Hanks", "Pitt", "Depp", "Washington", "Freeman", "Ford", "Jackson",

  // Politicians & Leaders
  "Lincoln", "Washington", "Jefferson", "Roosevelt", "Adams", "Roosevelt",
  "Wilson", "Truman", "Eisenhower", "Johnson", "Nixon", "Ford", "Carter",
  "Reagan", "Clinton", "Obama", "Trump", "Biden", "Mandela", "Churchill",

  // Activists & Humanitarians
  "King", "X", "Gandhi", "Teresa", "Tutu", "San Suu Kyi", "Merkel",
  "Thatcher", "Gandhi", "Meir", "Ardern", "Trudeau", "Macron", "de Gaulle",
  "Windsor", "Hanover", "Mountbatten", "Spencer", "Windsor", "Windsor",

  // TV & Media Personalities
  "Winfrey", "DeGeneres", "Letterman", "Fallon", "Noah", "Stewart",
  "Colbert", "O’Brien", "Leno", "Stern", "King", "Seinfeld", "Carlin",
  "Ball", "Burnett", "White", "Hope", "Williams", "Goldberg", "Fey",

  // Athletes
  "Jordan", "James", "Bryant", "O’Neal", "Bird", "Johnson", "Curry",
  "Durant", "Messi", "Ronaldo", "Maradona", "Pelé", "da Silva", "Federer",
  "Nadal", "Djokovic", "Williams", "Williams", "Osaka", "Jean King",

  // Entrepreneurs & Innovators
  "Zuckerberg", "Musk", "Jobs", "Bezos", "Page", "Brin", "Nadella",
  "Cook", "Wojcicki", "Sandberg", "Branson", "Buffett", "Carnegie",
  "Dell", "Bloomberg", "Ma", "Winfrey", "Schultz", "Lucas", "Gates",

  // Writers & Poets
  "Shakespeare", "Dickens", "Austen", "Orwell", "Woolf", "Joyce",
  "Hemingway", "Fitzgerald", "Twain", "Bronte", "Lee", "Neruda",
  "Poe", "Shelley", "Hughes", "Plath", "Angelou", "Rowling", "Morrison",
  "Steinbeck",

  // Artists
  "Picasso", "van Gogh", "Monet", "Dalí", "Warhol", "Kahlo", "O’Keeffe",
  "Pollock", "Matisse", "da Vinci", "Buonarroti", "Sanzio", "Donatello",
  "van Rijn", "Vermeer", "Munch", "Klimt", "Cézanne", "Chagall", "Rivera",

  // Musicians
  "Presley", "Jackson", "Nelson", "Ciccone", "Houston", "Carey",
  "Knowles", "Swift", "Adkins", "Fenty", "West", "Z", "Graham",
  "Lamar", "Eilish", "Styles", "Sheeran", "Timberlake", "Gomez", "Mebarak"
]
}
}