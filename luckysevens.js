//function prints out a number from 1-6
function rolldice(){
    return Math.ceil(Math.random() * (1 + 6 - 1));
}

function play(){
    
    var startingbet;
    var game_money;
    var max_won=0;
    var roll_count = 0;
    var max_roll=0;
    var roll;
    
    startingbet=document.getElementById("starting").value;
    game_money=startingbet;
    console.log("Starting game Money = "+game_money);

    if(startingbet <= 0 || startingbet==""||isNaN(startingbet)){
        alert("Starting bet must be greater than $0");
    }

    else{
        //rolling while use has money
        while(game_money > 0){
            roll = rolldice() + rolldice();
            console.log(roll);
            
            //giving user $4 if the sum of dice is 7
            if(roll == 7){
                game_money+=4;
                console.log("ITS 7! Game Money = "+game_money);
            }

            //user loses $1
            else{
                game_money--;
                console.log("YOU LOST! Game Money = "+game_money);
                    
            }

            //updating highest amount won and roll count at highest amount won
            //when neceesary
            if(game_money>max_won){
                max_won = game_money;
                max_roll = roll_count;
            }
            roll_count++;
            console.log("Current role count = "+roll_count)
       }
       console.log("highest money won = "+max_won);
       console.log("Roll count at most money = "+max_roll);

    }
   
   document.getElementById('startingbet').innerHTML = startingbet;
   document.getElementById('broke_roll_count').innerHTML = roll_count;
   document.getElementById('max_money').innerHTML = max_won;
   document.getElementById('max_count').innerHTML = max_roll;
   document.getElementById('resultsTable').style.display = 'block';
   document.getElementById('results').style.display = 'block';
}

