const PackArray = ["p", "a", "c", "k"];
const WeakArray = ['w', 'e', 'a', 'k'];
let letterArray = [document.getElementById('one'),document.getElementById('twoo'), document.getElementById('three'),document.getElementById('four'),document.getElementById('five'),document.getElementById('six'), document.getElementById('seven'), document.getElementById('eight'),document.getElementById('nine'), document.getElementById('ten'), document.getElementById('eleven'), document.getElementById('twelve'), document.getElementById('thirteen'), document.getElementById('fourteen'), document.getElementById('fifteen'), document.getElementById('sixteen')]
let choiceArray = [];
let pickIndexArray = [];
let pickLetterArray = [];

let i = 0;

function Play(pickIndex, pick){
  document.getElementById(pick).style.backgroundColor = 'green';
  choiceArray.push(document.getElementById(pick));
  pickIndexArray.push(pickIndex);
  pickLetterArray.push(document.getElementById(pick).textContent);
  i++;
  ValidityCheck();
}

function ResultsCheck(){
  if(pickLetterArray.length == 4){
    for (let y = 0; y < pickLetterArray.length; y++) {
      if(pickLetterArray[y] == PackArray[y]){
        alert('Well Done You found Pack');
        RightWord();
        NextTry();
        break;
      } else if(pickLetterArray[y] == WeakArray[y]){
        alert('Well Done You Found Weak');
        RightWord();
        NextTry();
        break;
      } else {
        WrongWord();
        NextTry();
        break;
      }
    }
  } else {
    alert('Cant use yet');
  }
}

function RightWord() {
  for (let r = 0; r < choiceArray.length; r++) {
    choiceArray[r].style.backgroundColor = 'yellow';
  }
}

function ValidityCheck(){

  if(pickIndexArray.length -1 > 0){
    for(let w = 1; w < pickIndexArray.length; w++){
      if(pickIndexArray[w] - pickIndexArray[w-1] !== 4 && pickIndexArray[w] - pickIndexArray[w-1] !== 1 && pickIndexArray[w] - pickIndexArray[w-1] !== 5){
        alert('Cant Pick That');
        pickIndexArray.length = pickIndexArray.length - 1;
        pickLetterArray.length = pickLetterArray.length - 1;
        choiceArray.length = choiceArray.length - 1;
        break;
      }
    }  
  }
}

function WrongWord() {
  for (let z = 0; z < choiceArray.length; z++) {
    choiceArray[z].style.backgroundColor = 'red';
  }
  alert("WRONG!!!!!")
}

function NextTry() {
  choiceArray = [];
  pickIndexArray = [];
  pickLetterArray = [];
  i = 0;
}

document.getElementById('one').onclick = () => Play(1,'one');

document.getElementById('twoo').onclick = () => Play(2, 'twoo');

document.getElementById('three').onclick = () => Play(3, 'three');

document.getElementById('four').onclick = () => Play(4, 'four');

document.getElementById('five').onclick = () => Play(5, 'five');

document.getElementById('six').onclick = () => Play(6, 'six');

document.getElementById('seven').onclick = () => Play(7, 'seven');

document.getElementById('eight').onclick = () => Play(8, 'eight');

document.getElementById('nine').onclick = () => Play(9, 'nine');

document.getElementById('ten').onclick = () => Play(10, 'ten');

document.getElementById('eleven').onclick = () => Play(11, 'eleven');

document.getElementById('twelve').onclick = () => Play(12, 'twelve');

document.getElementById('thirteen').onclick = () => Play(13, 'thirteen');

document.getElementById('fourteen').onclick = () => Play(14, 'fourteen');

document.getElementById('fifteen').onclick = () => Play(15, 'fifteen');

document.getElementById('sixteen').onclick = () => Play(16, 'sixteen');

document.getElementById('check').onclick = () => ResultsCheck();

document.getElementById('clear').addEventListener('click', function(){
  for (let e = 0; e < letterArray.length; e++) {
    letterArray[e].style.backgroundColor = '';   
  }
  NextTry();
  
})