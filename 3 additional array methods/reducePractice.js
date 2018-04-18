var roundScores = [36, 39, 44, 49, 45, 48, 52]

//Use reduce to get a sum
var sum= roundScores.reduce((total,score)=>total + score,0)
sum

//Use the sum to get an average
var avg= sum/roundScores.length;
avg
//Handicap is 4
//Use a map to reduce all scores by 4
//Use a reduce to get a sum
//Use the sum to get an average
var handicapAverage = roundScores.map(score=>score-4)
                        .reduce((total,score)=>total + score,0)
                        /roundScores.length;
handicapAverage


var lyricWords = ["Hello, ", "from ", "the ", "other ", "side ", "/r/n"]

//Use reduce to go through the lyricWords and concatenate them together

var lyrics= lyricWords.reduce((song,word)=> `${song} ${word}`,'')
lyrics


let scores = [[4,7],[7,2],[4,7],[5,5],[5,1],[7,3]];
let scoreBoard = scores.reduce((scoreBoard,game)=>{
        if(game[0]>game[1]){scoreBoard.wins++}
        else if (game[1]>game[0]){scoreBoard.losses++}
        else {scoreBoard.ties++}
    return scoreBoard
},{wins:0, losses:0, ties:0})
scoreBoard

let bands= ['a','b','c','d','c']
let tally = bands.reduce( (tally, band)=>{
        tally[band] = tally[band]? tally[band]+1:1
    return tally;
}, {} )
tally