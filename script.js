
let balance = localStorage.getItem('balance') ? parseInt(localStorage.getItem('balance')) : 100;
document.getElementById('balance').innerText = balance;

function placeBet(color) {
  if (balance >= 10) {
    balance -= 10;
    localStorage.setItem('balance', balance);
    document.getElementById('balance').innerText = balance;
    alert("Bet placed on " + color);
  } else {
    alert("Low balance! Please recharge.");
  }
}

function recharge(amount) {
  balance += amount;
  localStorage.setItem('balance', balance);
  document.getElementById('balance').innerText = balance;
  alert("Recharged ₹" + amount);
}

function fetchResult() {
  const synced = localStorage.getItem('syncedResult');
  if (synced) {
    document.getElementById('result').innerText = synced;
  }
}

window.onload = fetchResult;
