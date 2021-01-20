const mortalEnemy = ['dragons', 'trolls', 'goblins', 'pesky hobbitses', 'sirens', 'witches'];
const warriorTitle = [', the Brave', ', the Tall', ', the King of Kings', ', the Colossus'];
const rogueTitle = [', the Silent', ', the Shadow', ', the Blade', ', the Unseen'];
const mageTitle = [', the Wise', ', the Eternal', ', the Grey', ', the Thunder'];
const orcName = ['Killrogg', 'Kargath', 'Cromush', 'Nekros', 'Nazgrel', 'Ragnok'];
const humanName = ['Grete', 'Selene', 'Brendon', 'Kegan', 'Syd', 'Digby'];
const elfName = ['Felaern','Ciradyl','Shalaevar','Erendriel','Taranath','Varitan'];


let randomUpTo6 = Math.floor(Math.random()*6)
let randomUpTo4 = Math.floor(Math.random()*4)
let chosenName = ''
let title = ''
let enemy = ''

const printName = (userClass, userRace) => {
   let enemy = mortalEnemy[randomUpTo6]
    if (userRace === 'human'){
chosenName = humanName[randomUpTo6]
    }
    else if (userRace === 'elf') {
      chosenName = elfName[randomUpTo6]
    } 
    else if (userRace === 'orc') {
      chosenName = orcName[randomUpTo6]
}
if (userClass === 'rogue') {
  title = rogueTitle[randomUpTo4]
}
else if (userClass === 'warrior') {
  title = warriorTitle[randomUpTo4]
}
else if (userClass === 'mage') {
  title = mageTitle[randomUpTo4]
}
console.log(`Your name is ${chosenName}${title}. You are a powerful ${userClass}, as long as no ${enemy} are around`)
}

printName('rogue','orc')
