// the first question
function firstfunc() {
    var q = 1;
    var w = 2;
    var e = 3;
    var r = 4;
    var t = 5;
    var y = 6;
    var u = 7;
    var i = 8;
    var o = 9;
    var p = 10;
    return ( q + w + e + r + t + y + u + i + o + p ) / 10;
}
console.log(firstfunc());

// second question
function triangle() {
    var spaceTriangle = (5 * 6) / 2;
    return spaceTriangle;
}
document.getElementById("triangle-space"). innerHTML = triangle();



// third question
function ageInDays() {
    var age = 20 * 365;
    return age;
}
console.log(ageInDays());



// fourth question
function quesFour() {
    var x = 5 * 5;
    return x;
}
console.log(quesFour());



// fifth question
function firstName() {
    var names = ["taha" , "ahmed" , "abd" , "mohamed" , "abdullah" , "ali" , "mahmoud" , "rashed" , "rashad" , "emad"]
    return names[0];
}
console.log(firstName());



// sixth question 
function myName() {
    var fullName = "Taha Abd Elfatah Hassan Abdullah Baaz Khamis";
    return fullName;
}
document.getElementById("my-name"). innerHTML = myName();



// seventh question 
function timeToSeconds() {
    var time = 2 * 60 * 60;
    return time;
}
console.log(timeToSeconds());



// eight question
function eightfunc() {
    var num = 100 + 50 + 30 + 20;
    if (num > 350) {
        return true
    } else if (num < 350) {
        return false;
    }
}
document.getElementById("test8"). innerHTML = eightfunc();



// ninth question
function ninefunc() {
    var y = 0;
    if (y === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(ninefunc());



// tenth question
function tenFunc(x , y) {
    return x / y;
}
console.log(tenFunc( 10 , 5));



// eleventh question
function elevenFunc(t , w) {
    var o = "its equal";
    if (t > w) {

        return t;

    } else if (t < w) {

        return y;

    } else if (t === w) {
        return o;
    }

}
console.log(elevenFunc(10 , 10));


// twelfth question
function twelvefunc() {
    var num1 = 1;
    if (num1 === 1) {
        return true;
    } else {
        return false;
    }
}
console.log(twelvefunc());



// thirteenth question
function newDate() {
    var now = new Date();
    return now;
}
document.getElementById("total"). innerHTML = newDate();