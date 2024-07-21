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
