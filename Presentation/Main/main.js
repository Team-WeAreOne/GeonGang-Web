function saveFormData() {
  const name = document.getElementById("name").value;
  const company = document.getElementById("company").value;
  const businessNumber = document.getElementById("businessNumber").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("name", name);
  localStorage.setItem("company", company);
  localStorage.setItem("businessNumber", businessNumber);
  localStorage.setItem("password", password);

  const currentTime = new Date().toISOString();
  localStorage.setItem("submissionTime", currentTime);

  alert("공장장으로 임명되었습니다!");

  window.location.href = "../Attendance/attendance.html";
}

function openTab(event, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].classList.remove("active");
  }
  tablinks = document.getElementsByClassName("tab-button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).classList.add("active");
  event.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
  const existingMemberForm = document.getElementById("existing-member-form");
  existingMemberForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const currentTime = new Date().toISOString();
    localStorage.setItem("submissionTime", currentTime);
    window.location.href = "../Attendance/attendance.html";
  });
});
