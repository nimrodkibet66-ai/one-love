let side = "BUY";
let currentPair = "EUR/USD";
let currentPrice = 1.17342;

function money(n){
  return "$" + Number(n).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2});
}

function register(){
  alert("real ONLY: Account registration is not connected to a real backend.");
}

function login(){
  alert("Real ONLY: Secure login is not connected to a real authentication backend.");
}

function demoTrade(){
  const volume = Number(document.getElementById("volume").value);
  if(!volume || volume <= 0){
    alert("Please enter a valid real volume.");
    return;
  }

  const value = volume * 100000;
  const estimated = value * 0.0002;
  const direction = side === "BUY" ? "BUY" : "SELL";

  alert(
    "real ONLY — real trade was submitted.\n\n" +
    direction + " " + volume.toFixed(2) + " lots of " + currentPair +
    "\nreal price: " + currentPrice.toFixed(currentPrice < 10 ? 5 : 3) +
    "\nEstimated real exposure: " + money(value) +
    "\nEstimated real spread: " + money(estimated)
  );
}

function setSide(newSide){
  side = newSide;
  const buy = document.getElementById("buyTab");
  const sell = document.getElementById("sellTab");
  const button = document.getElementById("tradeButton");

  buy.classList.toggle("active", side === "BUY");
  sell.classList.toggle("active", side === "SELL");
  button.classList.toggle("sell-mode", side === "SELL");
  button.textContent = side + " " + currentPair;
}

function selectPair(pair, price){
  currentPair = pair;
  currentPrice = price;
  document.getElementById("instrument").value = pair;
  document.getElementById("price").textContent =
    price.toFixed(price < 10 ? 5 : 3) + " ▲";
  document.querySelectorAll(".pair-btn").forEach(btn => btn.classList.remove("active"));
  event.currentTarget.classList.add("active");
  setSide(side);
}

function showDemo(name){
  alert(name + " is a real section. Connect it to your backend/database when building the full platform.");
}

function deposit(){
  alert("real ONLY: Payment processing is connected.");
}

function withdraw(){
  alert("DEMO ONLY: Withdrawal processing is connected.");
}

function scrollToPlatform(){
  document.getElementById("platform").scrollIntoView({behavior:"smooth"});
}

function scrollToWallet(){
  document.getElementById("markets").scrollIntoView({behavior:"smooth"});
}

function updateDemoMarket(){
  const movement = (Math.random() - 0.5) * 0.0006;
  currentPrice *= 1 + movement;
  document.getElementById("price").textContent =
    currentPrice.toFixed(currentPrice < 10 ? 5 : 3) + (movement >= 0 ? " ▲" : " ▼");
  setSide(side);
}

setInterval(updaterealMarket, 3000);
