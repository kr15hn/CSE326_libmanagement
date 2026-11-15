// booking logic for home.html

// object: roll no -> seat code (one seat per student)
const bookings = {};

// clicking a free seat in the map fills the seat code box
function pickSeat(code) {
  if (document.getElementById(code).className === "free") {
    document.getElementById("seat").value = code;
  }
}

function bookSeat() {
  let name = document.getElementById("sname").value.trim();
  let roll = document.getElementById("roll").value.trim();
  let seat = document.getElementById("seat").value.trim().toUpperCase();
  let date = document.getElementById("date").value;
  let slot = document.getElementById("slot").value;

  if (name === "" || roll === "" || seat === "" || date === "") {
    alert("please fill name, roll no, seat code and date");
    return;
  }

  // every seat cell in the table has its code as id
  let cell = document.getElementById(seat);

  if (cell === null || (cell.className !== "free" && cell.className !== "taken")) {
    alert(seat + " is not a valid seat code (A-01 to C-03)");
  } else if (cell.className === "taken") {
    alert(seat + " is already taken");
  } else if (bookings[roll] !== undefined) {
    alert("you already booked " + bookings[roll] + " (one seat per student)");
  } else if (confirm("book " + seat + " for " + name + "?")) {
    // update the seat map
    cell.className = "taken";
    cell.innerHTML = seat + " taken";
    bookings[roll] = seat;

    // booking slip object with a method
    const slip = {
      name: name,
      roll: roll,
      seat: seat,
      date: date,
      slot: slot,
      details: function () {
        return this.name + " (" + this.roll + ") booked " + this.seat +
               " on " + this.date + ", " + this.slot;
      }
    };
    document.getElementById("slip").innerHTML = "Booking done: " + slip.details();
  } else {
    alert("booking cancelled");
  }
}
