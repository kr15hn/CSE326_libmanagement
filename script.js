// trying out the string methods
let name = prompt("enter your name");
let seat = prompt("enter seat code");

if (name == null || name == "" || seat == null || seat == "") {
  alert("please enter both name and seat code");
} else {
  name = name.trim();
  seat = seat.trim();
  seat = seat.toUpperCase();

  if (seat < "A-01" || seat > "C-03") {
    alert("seat code should be between A-01 and C-03");
  } else {
    alert(name + ", your seat is " + seat);
  }
}
