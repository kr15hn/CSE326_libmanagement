// trying out the string methods
let name = prompt("enter your name");
let seat = prompt("enter seat code");

name = name.trim();
seat = seat.trim();
seat = seat.toUpperCase();

alert(name + ", your seat is " + seat);
