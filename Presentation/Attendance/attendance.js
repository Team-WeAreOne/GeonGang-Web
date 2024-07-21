document.addEventListener("DOMContentLoaded", function () {
  const name = localStorage.getItem("name");
  const submissionTime = localStorage.getItem("submissionTime");
  if (name) {
    document.getElementById("greeting").textContent = name;
  }
  if (submissionTime) {
    const formattedTime = new Date(submissionTime).toLocaleString();
    document.getElementById("submissionTime").textContent =
      "출근시간: " + formattedTime;
  }
});

function logout() {
  localStorage.removeItem("name");
  localStorage.removeItem("company");
  localStorage.removeItem("businessNumber");
  localStorage.removeItem("password");
  localStorage.removeItem("submissionTime");

  window.location.href = "../Main/main.html";
}

//mouseover
let gnb = document.querySelectorAll("#gnb > li");
let gnbElement = document.querySelector("#gnb");

for (let i = 0; i < gnb.length; i++) {
  gnb[i].addEventListener("mouseover", () => {
    gnbElement.classList.add("on");
  });
}

let headerElement = document.querySelector("#header");

header.addEventListener("mouseout", (e) => {
  if (e.target.id == "gnb") {
    gnbElement.classList.remove("on");
  }
});
