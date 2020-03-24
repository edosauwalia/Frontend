myName = "Edosa Uwalia";

var courses = ["PHP", "HTML/CSS/JavaScript", "Go", "Node", "Kotlin", "C#", "Flutter", "Java"];

console.log('My name is ', myName + ', My courses are ', courses);

var even = 0;
var odd = 0;


var count = function() {
    console.log('test');
    for (i = 1; i < 201; i++) {
        if (i % 2 === 0) {
            console.log(i);
            even += i;
        } else {
            odd += i;
        }
    }
}

count();