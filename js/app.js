var t3 = {
    counter: 0,
    winningCombination: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ],
    player1: [],
    player2: [],
    compare: function() {
        for (var i = 0; i < t3.winningCombination.length; i++) {
            var player1choose = $(t3.winningCombination[i]).not(t3.player1).get(); // 
            if (player1choose.length === 0) {
                alert("player 1 wins");
            }
        }
        for (var i = 0; i < t3.winningCombination.length; i++) {
            var player2choose = $(t3.winningCombination[i]).not(t3.player2).get(); // 
            if (player2choose.length === 0) {
                alert("player 2 wins");
            }
        }
        if ( t3.player1 + t3.player2 === 9 ) {
          alert("ties!")
        } 
    },
    xAndo: function() {
        t3.counter++
            if (t3.counter % 2 === 0) {
                $(this).toggleClass('o');
                var className = $(this).attr('class').split(' ')[0];
                var classNum = parseInt(className.slice('-1'))
                t3.player2.push(classNum)
                console.log(classNum)
                t3.compare()
            } else {
                $(this).toggleClass('x');
                var className = $(this).attr('class').split(' ')[0];
                var classNum = parseInt(className.slice('-1')) // try using + sign from jquery
                t3.player1.push(classNum)
                console.log(classNum)
                t3.compare()
            }
    },
    init: function() {
        $("#tic-container div").on('click', this.xAndo);
    }
}

$(document).ready(function() {
    t3.init();
});
// $(document).ready(function() {
// var x = "x"
// var o = "o"
// var count = 0;
// var o_win = 0;
// var x_win = 0;
// $('#game li').click(function(){

//   if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
//    {
//    alert('O has won the game. Start a new game')
//    $("#game li").text("+");
//   $("#game li").removeClass('disable')
//   $("#game li").removeClass('o')
//   $("#game li").removeClass('x')
//   $("#game li").removeClass('btn-primary')
//   $("#game li").removeClass('btn-info')
//    }
//   else if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x'))
//   {
//    alert('X wins has won the game. Start a new game')
//    $("#game li").text("+");
//   $("#game li").removeClass('disable')
//   $("#game li").removeClass('o')
//   $("#game li").removeClass('x')
//   $("#game li").removeClass('btn-primary')
//   $("#game li").removeClass('btn-info') 
//   }
//   else if (count == 9)
//   {
//   alert('Its a tie. It will restart.')
//   $("#game li").text("+");
//   $("#game li").removeClass('disable')
//   $("#game li").removeClass('o')
//   $("#game li").removeClass('x')
//   $("#game li").removeClass('btn-primary')
//   $("#game li").removeClass('btn-info')
//   count = 0
//   }
//   else if ($(this).hasClass('disable'))
//   {
//     alert('Already selected')
//   }
//   else if (count%2 == 0)
//   {
//     count++
//     $(this).text(o)
//       $(this).addClass('disable o btn-primary')
//       if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
//       {
//      alert('O wins')
//      count = 0
//      o_win++
// $('#o_win').text(o_win)
//         }
//   }
//    else  
//   {
//     count++
//     $(this).text(x)
//     $(this).addClass('disable x btn-info')
//      if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x'))
//         {
//    alert('X wins')
//    count = 0
//    x_win++
//    $('#x_win').text(x_win)
//         }
//   }

//    });
//     $("#reset").click(function () {
//     $("#game li").text("+");
//   $("#game li").removeClass('disable')
//   $("#game li").removeClass('o')
//   $("#game li").removeClass('x')
//   $("#game li").removeClass('btn-primary')
//   $("#game li").removeClass('btn-info')
//   count = 0

//   });
// });

