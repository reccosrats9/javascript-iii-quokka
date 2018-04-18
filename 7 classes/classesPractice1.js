// Build a class for an american ninja warrior
// Properties to track : Name, best time, farthest difficulty
// Add a method to update the best time
// Add a method to update the farthest difficulty
// Add a method to return the best time and farthest difficulty on an object

class Ninja{
    constructor(name, bestTime, farthest){
        this.name= name;
        this.bestTime= bestTime;
        this.farthest= farthest
    }
    updateTime(time){
        if (this.bestTime> bestTune>newTime){
            this.bestTime=newTime
        }
    }
    updateDifficulty(){
        this.farthest++; //not quite what the question is asking, but it's what we did in class
    }
    display(){
        return `The amazing ninja ${this.name} completed the course in ${this.bestTime} seconds, with a difficulty of ${this.farthest}`
    }
}
let Shannon= new Ninja('Shan', 9, 222);
Shannon
Shannon.updateDifficulty();
Shannon
