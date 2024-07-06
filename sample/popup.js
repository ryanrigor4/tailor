import { downloadPDF } from "./utils/downloadPdf.js";
import { updateFormData } from "./utils/updateFormData.js";
import { loadFormData } from "./utils/loadFormData.js";

const body = document.getElementsByTagName("body")[0];

const screenContainer = document.getElementById("screen-container");
const screens = document.getElementsByClassName("screen");
const formScreen = document.getElementById("form-container");
const form = document.getElementById("form");
const resumeScreen = document.getElementById("resume-container");
const splashScreen = document.getElementById("splash-container");

let downloadBtn = document.getElementById('download-btn');
let generateBtn = document.getElementById('generate-btn');

function slideScreen(screenIndex) {
  for (const screen of screens) {
    screen.classList.remove("active");
  }
  screens[screenIndex].classList.add("active");
}

window.onload = () => {
  loadFormData(); //fills form based on localStorage

  downloadBtn.addEventListener('click', () => {
    console.log("Fetching PDF!");
    downloadPDF();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    updateFormData();
    // gpt api call
    
    slideScreen(2);
  });

  // mocking load
  setTimeout(() => { slideScreen(1); }, 2000);
};