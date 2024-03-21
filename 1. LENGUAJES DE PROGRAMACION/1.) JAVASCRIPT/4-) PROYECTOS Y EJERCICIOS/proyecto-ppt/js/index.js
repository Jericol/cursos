const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userpoints_span = document.getElementById("userpoints")
const cpupoints_span = document.getElementById("cpupoints")
const winner_p = document.getElementById("winner")
const creator_p = document.getElementById("creator")


let userpoints = 0
let cpupoints = 0

const winnershow = () => {
   creator_p.style.display = 'none'
   winner_p.style.display = 'block'
}

const getcpuchoice = () => {
  const choices = ["r", "p", "s"];
  let numberRamdon = Math.floor(Math.random() * 3);
  let cpuchoice = choices[numberRamdon];
  return cpuchoice
};

const won = () => {
   userpoints++
   userpoints_span.textContent = userpoints
}

const lost = () => {
   cpupoints++
   cpupoints_span.textContent = cpupoints
}


const checkwinner = (userchoice, cpuchoice) => {
  switch (userchoice + cpuchoice) {
    case 'rr':
      console.log(`userchoice is ${userchoice} cpuchoise ${cpuchoice} , TIE`);
      break;
    case 'rp':
      console.log(
        `userchoice is ${userchoice} cpuchoise ${cpuchoice} , YOU LOST`
      );
      lost()
      break;
    case 'rs':
      console.log(
        `userchoice is ${userchoice} cpuchoise ${cpuchoice} , YOU WON`
      );
      won()
      break;
    case 'pr':
      console.log(
        `userchoice is ${userchoice} cpuchoise ${cpuchoice} , YOU WON`
      );
      won()
      break;
    case 'pp':
      console.log(`userchoice is ${userchoice} cpuchoise ${cpuchoice} , TIE`);
      break;
    case 'ps':
      console.log(
        `userchoice is ${userchoice} cpuchoise ${cpuchoice} , YOU LOST`
      );
      lost()
      break;
    case 'sr':
      console.log(
        `userchoice is ${userchoice} cpuchoise ${cpuchoice} , YOU LOST`
      );
      lost()
      break;
    case 'sp':
      console.log(
        `userchoice is ${userchoice} cpuchoise ${cpuchoice} , YOU WIN`
      );
      won()
      break;
    case 'ss':
      console.log(`userchoice is ${userchoice} cpuchoise ${cpuchoice} , TIE`);
      break;
    default:
      break;
  }
};

let userchoices;

rock.addEventListener("click", () => {
   userchoices = "r";
   let cpuchoices = getcpuchoice();
   checkwinner(userchoices, cpuchoices);
   winnershow()
});

paper.addEventListener("click", () => {
   userchoices = "p";
   let cpuchoices = getcpuchoice()
   checkwinner(userchoices,cpuchoices)
   winnershow()
});

scissors.addEventListener("click", () => {
   userchoices = "s";
   let cpuchoices = getcpuchoice()
   checkwinner(userchoices,cpuchoices)
   winnershow()
});
