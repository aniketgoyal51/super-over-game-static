const strike= document.getElementById("strike")
const reset= document.getElementById("reset")
const $team1= document.getElementById("score-team1")
const $team1w= document.getElementById("wickets-team1")
const $team2=
 document.getElementById("score-team2")
const $team2w= document.getElementById("wickets-team2")

const strikeaud=new Audio("http://bit.ly/so-ball-hit")
const gameoveraud=new Audio("http://bit.ly/so-crowd-cheer")

var team1s=0;
var team1w=0;
var team2s=0;
var team2w=0;
var team1ball=0;
var team2ball=0;
var tturn=1;

const possibleoutcome=[0,1,2,3,4,6,"W"];
function gameover(){
gameoveraud.play();
if(team1s > team2s) alert("IND wins")
if(team1s < team2s) alert("PAK wins")
if(team1s === team2s) alert("It is another superover!");
}

function updatescore(){
    $team1.textContent = team1s
    $team1w.textContent = team1w
    $team2.textContent = team2s
    $team2w.textContent = team2w
}

reset.onclick = () => {
    window.location.reload();
}

strike.onclick=()=>{
    strikeaud.pause();
    strikeaud.currentTime=0;
    strikeaud.play();

    const randomele =possibleoutcome[Math.floor(Math.random() * possibleoutcome.length)];
    if(tturn===2){
        team2ball++;

        document.querySelector(`#team2-superover div:nth-child(${team2ball})`
        ).textContent = randomele;
        if(randomele==="W"){
            team2w++;
        }
        else{
            team2s+=randomele;
        }
        if(team2ball===6 || team2w===2 || team2s>team1s){
            tturn=3;
            gameover()
        }
    }
    if(tturn===1){
        team1ball++;

        document.querySelector(`#team1-superover div:nth-child(${team1ball})`
        ).textContent = randomele;
        if(randomele==="W"){
            team1w++;
        }
        else{
            team1s+=randomele;
        }
        if(team1ball===6 || team1w===2 ){
            tturn=2;
        }
        
    }
    updatescore()
};

