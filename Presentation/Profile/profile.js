document.addEventListener("DOMContentLoaded", function () {
  const name = localStorage.getItem("name");
  const company = localStorage.getItem("company");
  const businessNumber = localStorage.getItem("businessNumber");
  const partnerships = JSON.parse(localStorage.getItem("partnerships")) || [];

  if (name) {
    document.getElementById("managerName").textContent = name + " 공장장님";
    document.getElementById("name-highlight").textContent = name;
  }

  if (company) {
    document.getElementById("factoryName").placeholder = company;
  }

  if (businessNumber) {
    document.getElementById("factoryNumber").placeholder = businessNumber;
  }

  function updatePartnershipsList(partnerships) {
    const partnershipsList = document.getElementById("partnershipsList");
    partnershipsList.innerHTML = `
        <tr>
          <td>1</td>
          <td>기업복지몰</td>
          <td>2024-07-21</td>
          <td><button class="delete-button" onclick="removePartnership(0)">제휴 해지</button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>BTMS</td>
          <td>2024-06-08</td>
          <td><button class="delete-button" onclick="removePartnership(1)">제휴 해지</button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>머신머신</td>
          <td>2024-06-03</td>
          <td><button class="delete-button" onclick="removePartnership(2)">제휴 해지</button></td>
        </tr>`;
  }

  updatePartnershipsList(partnerships);

  window.removePartnership = function (index) {
    partnerships.splice(index, 1);
    localStorage.setItem("partnerships", JSON.stringify(partnerships));
    updatePartnershipsList(partnerships);
  };

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

  // 버튼 클릭 시 addPartnership 함수 호출
  const addButton = document.getElementById("addPartnershipBtn");
  if (addButton) {
    addButton.addEventListener("click", function () {
      addPartnership("LABNOSH"); // 예시로 LABNOSH 사용
    });
  }

  updatePartnershipsList(partnerships);
});
