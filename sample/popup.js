
const body = document.getElementsByTagName("body")[0];

const screenContainer = document.getElementById("screen-container")
const screens = document.getElementsByClassName("screen")
const formScreen = document.getElementById("form-container")
const form = document.getElementById("form")
const resumeScreen = document.getElementById("resume-container")
const splashScreen = document.getElementById("splash-container")

let downloadBtn = document.getElementById('download-btn');
let generateBtn = document.getElementById('generate-btn');

async function downloadPDF() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const sample = `\\documentclass{article}

\\begin{document}

Hello, World!

\\end{document}`;

  const raw = JSON.stringify({
    "compiler": "pdflatex",
    "resources": [
      {
        "main": true,
        "content": sample
      }
    ]
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  try {
    const response = await fetch("https://latex.ytotech.com/builds/sync", requestOptions);
    
    // Check if the fetch was successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'hello_world.pdf'; // The name of the downloaded file

    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

    console.log('PDF downloaded successfully');
  } catch (error) {
    console.error('Failed to download PDF:', error);
  }
}

function slideScreen (screenIndex){
  for(const screen of screens){
    screen.classList.remove("active")
  }
  screens[screenIndex].classList.add("active")
}

window.onload = () => {
  downloadBtn.addEventListener('click', () => {
    downloadPDF();
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    //gpt api call
    slideScreen(2)
  })

  //load init db data

  //mocking load
  setTimeout(()=>{slideScreen(1)}, 2000)
}