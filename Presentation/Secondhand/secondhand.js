let gnb = document.querySelectorAll("#gnb > li");
let gnbElement = document.querySelector("#gnb");

for (let i = 0; i < gnb.length; i++) {
  gnb[i].addEventListener("mouseover", () => {
    gnbElement.classList.add("on");
  });
}

let headerElement = document.querySelector("#header");

headerElement.addEventListener("mouseout", (e) => {
  if (e.target.id == "gnb") {
    gnbElement.classList.remove("on");
  }
});

function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document
  .getElementById("write-post-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("post-title").value;
    const content = document.getElementById("post-content").value;

    // 글을 localStorage에 저장
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push({ title, content });
    localStorage.setItem("posts", JSON.stringify(posts));

    // 모달을 닫고 폼을 초기화합니다.
    closeModal();
    this.reset();

    // 저장된 글을 바로 화면에 표시합니다.
    displayPosts();
  });

function displayPosts() {
  const postList = document.getElementById("post-list");
  postList.innerHTML = "";
  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post";

    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;
    postElement.appendChild(titleElement);

    const contentElement = document.createElement("p");
    contentElement.textContent = post.content;
    postElement.appendChild(contentElement);

    postList.appendChild(postElement);
  });
}

// 페이지 로드 시 저장된 글 표시
document.addEventListener("DOMContentLoaded", displayPosts);
