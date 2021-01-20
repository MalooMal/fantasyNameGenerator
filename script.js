const mortalEnemy = ['dragons', 'trolls', 'goblins', 'pesky hobbitses', 'sirens', 'witches'];
const warriorTitle = [', the Brave', ', the Tall', ', the King of Kings', ', the Colossus'];
const rogueTitle = [', the Silent', ', the Shadow', ', the Blade', ', the Unseen'];
const mageTitle = [', the Wise', ', the Eternal', ', the Grey', ', the Thunder'];
const orcName = ['Killrogg', 'Kargath', 'Cromush', 'Nekros', 'Nazgrel', 'Ragnok'];
const humanName = ['Grete', 'Selene', 'Brendon', 'Kegan', 'Syd', 'Digby'];
const elfName = ['Felaern','Ciradyl','Shalaevar','Erendriel','Taranath','Varitan'];

let userClass = 'rogue'
let userRace = 'human'

let randomUpTo6 = Math.floor(Math.random()*6)
let chosenName = ''

const printName = (userClass, userRace) => {
    if (userRace = 'human'){
chosenName = humanName[randomUpTo6]
console.log(chosenName)
    } 
}