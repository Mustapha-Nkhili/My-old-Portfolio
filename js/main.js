// ==> Skills Section <== //
const skillsSection = document.querySelector("#ourSkills");
const skills = document.querySelectorAll(".skill .container div");
let skillsStarted = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= skillsSection.offsetTop + 50) {
    if (!skillsStarted) {
      skills.forEach((skill) => {
        skill.style.width = skill.dataset.width;
      });
    }
    skillsStarted = true;
  }
});
// ==> Skills Section <== //

// ==> Events Section <== //
const events = document.querySelector("#events");

// get the the timestamp of the last day of the current year
const endOfYear = new Date(
  `dec, 31, ${new Date().getFullYear()}, 23:59:59`
).getTime();

setInterval(() => {
  const timeNow = new Date().getTime();
  let timeDifferance = endOfYear - timeNow;

  // get the rest of time to the event
  let days = Math.floor(timeDifferance / (1000 * 60 * 60 * 24)),
  hours = Math.floor((timeDifferance / (1000 * 60 * 60 * 24)) % 60),
  minutes = Math.floor((timeDifferance / (1000 * 60)) % 60),
  seconds = Math.floor((timeDifferance / 1000) % 60);

// Update the date in the event section
  document.querySelector("#events .days h3").textContent = days < 10 ? `0${days}` : days;
  document.querySelector("#events .hours h3").textContent = hours < 10 ? `0${hours}` : hours
  document.querySelector("#events .minutes h3").textContent = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector("#events .seconds h3").textContent = seconds < 10 ? `0${seconds}` : seconds;
}, 1000);

// ==> Events Section <== //

// ==> Stats section <== //
const stats = document.querySelector("#stats");
const nums = document.querySelectorAll("#stats #num");
let statsStarted = false;

window.addEventListener("scroll", function () {
  if (this.scrollY >= stats.offsetTop - 100) {
    if (!statsStarted) {
      nums.forEach((num) => countIncrease(num));
    }
    statsStarted = true;
  }
});

function countIncrease(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    if (goal < 1000) {
      element.textContent++;
    } else {
      goal = goal / 1000;
      element.textContent++;
    }
    if (element.textContent == goal) {
      clearInterval(count);
      if (element.dataset.goal >= 1000) {
        element.textContent = element.textContent + "K";
      }
    }
  }, 3000 / goal);
}
// ==> Stats Section <== //
