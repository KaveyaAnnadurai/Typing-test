var chosenTime = 0,sec = 0,a;
var e = document.getElementById('list');
var timerDiv = document.getElementById('timer');
var userLine = document.getElementById("userWritternLines");
var givenPara = document.getElementById('givenPara');
var chosenArrIndex;
var error =0,accuracy = 0, charactersTyped = 0, correctCharactersTyped = 0;
var arr = [
   "A typing test is designed to find how fast one types in a given amount of time. We will be designing a typing game using JavaScript that presents a simple typing challenge and finds the performance of typing by calculating the Characters Per Minute (CPM), Words Per Minute (WPM) and the accuracy of the typed characters." ,
   "The game shows a series of quotes that have to be typed in a specified time limit, as fast as possible. A higher typing speed would show a higher WPM value. Incorrectly typed characters would be marked accordingly during typing. We will create the HTML layout first, style it using CSS and then write the logic in JavaScript. ",
]
function startTyping(){
    document.getElementById('intro').style.display = "none";
    document.getElementById('result').style.display = "none"
   
    document.getElementById('container').style.display = "flex";
    chosenTime = e.options[e.selectedIndex].value
    console.log(chosenTime)
    document.getElementById('timer').innerText = "00 : " + chosenTime;
    console.log(chosenTime); 
    sec = chosenTime;
    chosenArrIndex = Math.floor(Math.random() * arr.length);
    console.log(arr[chosenArrIndex]);
    // givenPara.innerText = arr[chosenArrIndex];
    
    updateGivenPara();
   a= setInterval(timer,1000);

}
function updateGivenPara(){
   
   var given_arr = [];
   console.log('type',typeof(given_arr))
    given_arr = arr[chosenArrIndex].split('');
console.log(given_arr)
    totalNoOfChar = given_arr.length;
    given_arr.forEach(char =>{
        const charSpan = document.createElement('span')
        charSpan.innerText = char
        givenPara.appendChild(charSpan);
    })
}
// const a = (function(){
//     // if(chosenTime < 0){

//     // }
//     // document.getElementById('timer').innerText = "00 : " + chosenTime;
//     // chosenTime-=1;
//     console.log("ifffee");
// })()

function timer(){
    if(sec == 0)
    {
        clearInterval(a);
        userLine.style.display = "none"
        givenPara.style.display = "none"
        // document.getElementById('container').style.display = "none";
        document.getElementById('result').style.display = "flex"
        document.getElementById('result').innerHTML = "Errors: " +error +"<br> Accuracy:" + accuracy+ "%";
    }
    var secondString = sec;
    if(sec < 10){
        secondString = "0"+sec;
    }
    document.getElementById('timer').innerHTML = "00 : " + secondString;
    sec--;
    // console.log(sec)
}
function processCurrentText(){
   
    console.log('started')
    charactersTyped++;
    error = 0;
    input_arr = userLine.value.split('');
    // given_arr = givenPara.innerText.split('');
    quoteSpanArray = givenPara.querySelectorAll('span');
  
    quoteSpanArray.forEach((char,index) =>{
        let typedChar = input_arr[index];
        if (typedChar == null) {
            char.classList.remove('correct_char');
            char.classList.remove('incorrect_char');
       
            // correct character
          } else if(typedChar == char.innerText){
            // console.log("correct");
            char.classList.add('correct');
            char.classList.remove('incorrect');
        }else {
            // console.log("incorrect");
            char.classList.add('incorrect');
            char.classList.remove('correct');
            error++;
        //    console.log('err',error);
        }
      
        
        // console.log(char);

    }); 
    correctCharactersTyped = charactersTyped - error;
    accuracy = correctCharactersTyped/charactersTyped *100;
    accuracy = Math.round(accuracy)
    console.log(charactersTyped);
    // if(error>0)
    // {totalNoOfErrors+=error;
    // }
    // console.log('tot',totalNoOfErrors);
     
}
function restart(){
    document.getElementById('intro').style.display = "flex";
    document.getElementById('container').style.display = "none";
    document.getElementById('result').style.display = "none";
    error =0;
    accuracy = 0;
     charactersTyped = 0;
     correctCharactersTyped = 0;
     userLine.style.display = "block"
     givenPara.style.display = "block"
    userLine.value = ""
    givenPara.innerHTML = ""
    
}
