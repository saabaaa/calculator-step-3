import { display } from "./script.js";
const historyMemoryTitle = document.querySelector(".his-memmory");
const historyList = document.querySelector(".history-calculator");
const memoryList = document.querySelector(".memory-calculator");
const memoryItem = document.querySelector(".memory-value");
const historyItem = document.querySelector(".history-value");
const trashBin = document.querySelector(".trash-bin");
const memorySign = document.querySelector(".memory-sign");
let historyData = [];
let memoryData = [];

historyMemoryTitle.addEventListener("click", (e) => {
  const { target } = e;
  if (target.classList.contains("memory-value")) {
    memoryItem.classList.add("border-bottom");
    historyItem.classList.remove("border-bottom");
    historyList.style.display = "none";
    memoryList.style.display = "block";
  }

  if (target.classList.contains("history-value")) {
    historyItem.classList.add("border-bottom");
    memoryItem.classList.remove("border-bottom");
    historyList.style.display = "block";
    memoryList.style.display = "none";
  }
});

memorySign.addEventListener("click", (e) => {
  const { target } = e;

  if (target.classList.contains("mc")) {
  }
  if (target.classList.contains("mr")) {
  }
  if (target.classList.contains("mm")) {
  }
  if (target.classList.contains("m-")) {
    let lastNumber = memoryData.pop(memoryData[memoryData.length - 1]);
    lastNumber = display.innerHTML - lastNumber;
    memoryData.push(lastNumber);
    console.log(memoryData);
  }
  if (target.classList.contains("ms")) {
    memoryData.push(display.innerHTML);
    memoryList.innerHTML = "";
    memoryData.forEach((element) => {
      memoryList.innerHTML += `<li>${element}</li>`;
    });
  }
});

function updateHistory() {
  historyList.innerHTML = "";
  historyData.forEach((element) => {
    historyList.innerHTML += `<li>${element}</li>`;
  });
}

trashBin.addEventListener("click", () => {
  historyData = [];
  historyList.innerHTML = " There's no history yet";
});

export { updateHistory, historyData };
