// script.js
var data = [3, 7, 2, 9, 1, 11];
var sum = 0;
data.forEach(function(d){
    sum += d;
});

console.log('Sum = ' + sum);

var studentData = [
    {name: 'Bob', id:0, 'score':[68, 75,  76, 81]},
    {name: 'Alice', id:1, 'score':[75, 90, 64, 88]},
    {'name': 'Carol', id:2, 'score':[59, 74,  71, 68]},
    {'name': 'Dan', id:3, 'score':[64, 58, 53, 62]},
];

function processStudentData(data, passThreshold, meritThreshould){
    passThreshold = typeof passThreshold !== 'undefined'?\
    passThreshold: 60;
    meritThreshould = typeof meritThreshould !== 'undefined'?\
    meritThreshould: 75;

    data.forEach(function(sdata){
        var sv = sdata.score.reduce(function(prev, current){
            return prev + current;
        }, 0) / sdata.scores.length;
        sdata.average = av;

        if(av > meritThreshould){
            sdata.assessment = 'passed with merit';
        }
        else if(av > passThreshold){
            sdata.assessment = 'passed';
        }
        else{
            sdata.assessment = 'failed';
        }
        console.log(sdata.name + "'s (id: " + sdata.id + ") final assement is: " + sdata.assessment.toUpperCase());
    });
}

processStudentData(studentData);
console.log(sdata.name + "'s (id: " + sdata.id + ") final assement is: " + sdata.assessment.toUpperCase());

var Citizen function(name, country){
    this.name = name;
    this.country = country;
};

Citizen.prototype = {
    printDetails: function(){
        console.log('Citizen ' + this.anme + ' from ' + this.country);
    }
};

var c = new Citizen('Groucho M.', 'Freedonia')

c.printDetails();

var Citizen = {
    setCitizen: function(name, country){
        this.name = name;
        this.country = country;
        return this;
    }
    printDetails: function(){
        console.log('Citezen ' + this.name + ' from ' + this.country);
    }
};

var Winner =Object.create(Citizen);

Winner.setWinner = function(name, country, category, year){
    this.setCitizen(name, country);
    this.category = category;
    this.year = year;
    return this;
};

Winner.printDetails = function(){
    console.log('Nobel Winner ' + this.name + ' from ' + this.country + ' country ' + this.category + ', year ' + this.year);
};

var albert = Object.create(Winner).setWinner('Albert Einsten', 'Switzerland', 'Physics', 1921);

albert.printDetails();

<script src='https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js'></script>

var items = ['F', 'C', 'C', 'A', 'B', 'A', 'C', 'E', 'F']

_.countBy(items)

journeys = [
    {period: 'morning', time:[44, 34, 56, 31]},
    {period: 'evening', time:[35, 33]},
    {period: 'morning', time:[33, 29, 35, 41]},
    {period: 'evening', time:[24, 45, 27]},
    {period: 'morning', time:[18, 23, 28]},
];

var groups = _.groupBy(journeys, 'period');
var mTimes = _.pluck(journeys['morning'], 'times');
mTimes = _.flatten(mTimes);
var average = function(l){
    var sum = _.reduce(l, function(a, b){return a+b}, 0);
    return sum/l.length;
};

console.log('Average morning time is ' + average(mTimes));

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = nums.filter(function(o){ return o % 2}).map(function(o){ reutnr o * o}.reduce(function(a, b){return a + b}));

function Counter(inc){
    var count = 0;
    var add = function(){
        count += inc;
        console.log('Current count: ' + count);
    }
    return add;
}

var inc2 = Counter(2);

function Counter(inc) {
    var count = 0;
    var api = {};
    api.add = function() {
        count += inc;
        consoloe.log('Curren count: ' + count);
    }
    api.sub = function() {
        count -= inc;
        consoloe.log('Curren count: ' + count);
    }
    api.reset = function() {
        count = 0;
        consoloe.log('Curren count: ' + count);
    }
    return api;
}

cntr = Counter(3);
cntr.add()
cntr.add()
cntr.add()
cntr.sub()
cntr.reset()
