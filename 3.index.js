var currentValue = "X";  // WHENEVER WE CLICK ANY WHERE FRIXT TYM IT PRINT "X"
gameOver = false;
drawCount = 0;  // FOR DRAW THE MATCH

function play(id)
{
   var isThisString = "" + id;   // FOR CONVERTING THE NUM IN STRING [play(1) ---> play("1")]

   //if the cell is not empty then donot do anything (if empty then put X OR O) ---->>
   var isNotAEmptyCell = document.getElementById(isThisString).innerText !== "";

   if(isNotAEmptyCell || gameOver)
   {
      return;  // return does not excute the next code it returns frm here (if cell is not empty)
   }

    // if the cell is empty then excute this down line codes--->> 

      document.getElementById(isThisString).innerText = currentValue;
      winner(); // CAALING THE WINNER FUN HERE

     if(currentValue === "X")
       {
          currentValue = "O";  // IF FRXT TYM IT PRINT "X" ANYWHERE THEN PRINT "O" ANYWHERE
       }else{
         currentValue = "X"  // AND THERE IS "0" ANYWHERE THEN PRINT "X"
       }

       drawCount++  // INCREASE THE DRAWCOUNT TO 9
       if(drawCount === 9 && !gameOver)
       {
          document.getElementById("drawMessage").innerHTML = "<center><h3>MATCH DRAW</h3></center>"
       }
 
}

function winner()
{
   var getval1 = document.getElementById("1").innerText;
   var getval2 = document.getElementById("2").innerText;
   var getval3 = document.getElementById("3").innerText;
   var getval4 = document.getElementById("4").innerText;
   var getval5 = document.getElementById("5").innerText;
   var getval6 = document.getElementById("6").innerText;
   var getval7 = document.getElementById("7").innerText;
   var getval8 = document.getElementById("8").innerText;
   var getval9 = document.getElementById("9").innerText;

   if(
      (getval1 != "" && getval1 === getval2 && getval2 === getval3) || // 3 ROWS
      (getval4 != "" && getval4 === getval5 && getval5 === getval6) ||
      (getval7 != "" && getval7 === getval8 && getval8 === getval9) ||

      (getval1 != "" && getval1 === getval4 && getval4 === getval7) ||  // 3 COLMS
      (getval2 != "" && getval2 === getval5 && getval5 === getval8) ||
      (getval3 != "" && getval3 === getval6 && getval6 === getval9) ||

      (getval1 != "" && getval1 === getval5 && getval5 === getval9) ||  // 2 DIAGONALS
      (getval3 != "" && getval3 === getval5 && getval5 === getval7)
   )

   {
      gameOver = true;
      document.getElementById("winMessage").innerHTML = 
                                  `<center><h3>GAME OVER - ${currentValue} WINS </h3></center>`
   }
}



function reset()
{
   location.reload();
}









