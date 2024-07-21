// 공장 재고 관리 목록을 업데이트하는 함수
function updatePartnershipsList(partnerships) {
  const partnershipsList = document.getElementById("partnershipsList");
  partnershipsList.innerHTML = partnerships
    .map(
      (partnership) => `
        <div class="partnership">
            <p>회사 이름: ${partnership.companyName}</p>
            <p>제휴 날짜: ${partnership.date}</p>
        </div>
    `
    )
    .join("");
}

// 제휴 추가 함수
window.addPartnership = function (companyName) {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  // 기존 제휴 목록 불러오기
  const partnerships = JSON.parse(localStorage.getItem("partnerships")) || [];

  // 새로운 제휴 정보 추가
  partnerships.push({ companyName, date, time });

  // 로컬 스토리지에 저장
  localStorage.setItem("partnerships", JSON.stringify(partnerships));

  // 업데이트된 제휴 목록을 화면에 반영
  updatePartnershipsList(partnerships);

  alert("제휴가 성공적으로 맺어졌습니다!");
};

// DOMContentLoaded 이벤트 리스너
document.addEventListener("DOMContentLoaded", function () {
  // 버튼 클릭 시 addPartnership 함수 호출
  const addButton = document.getElementById("addPartnershipBtn");
  if (addButton) {
    addButton.addEventListener("click", function () {
      addPartnership("LABNOSH"); // 예시로 LABNOSH 사용
    });
  }

  // 제휴 목록을 로컬 스토리지에서 불러와 화면에 업데이트
  const partnerships = JSON.parse(localStorage.getItem("partnerships")) || [];
  updatePartnershipsList(partnerships);
});

// GNB 메뉴의 mouseover 및 mouseout 이벤트 리스너
let gnb = document.querySelectorAll("#gnb > li");
let gnbElement = document.querySelector("#gnb");

for (let i = 0; i < gnb.length; i++) {
  gnb[i].addEventListener("mouseover", () => {
    gnbElement.classList.add("on");
  });
}

document.querySelector("#header").addEventListener("mouseout", (e) => {
  if (!gnbElement.contains(e.relatedTarget)) {
    gnbElement.classList.remove("on");
  }
});
