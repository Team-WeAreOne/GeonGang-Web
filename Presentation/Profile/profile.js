document.addEventListener('DOMContentLoaded', function() {
    // 공장장님 이름, 공장명, 공장번호를 로컬 스토리지에서 가져옴
    const managerName = localStorage.getItem('managerName');
    const factoryName = localStorage.getItem('factoryName');
    const factoryNumber = localStorage.getItem('factoryNumber');
    const partnerships = JSON.parse(localStorage.getItem('partnerships')) || [];

    // 공장장님 이름이 있으면 profile-info의 h2 요소에 삽입
    if (managerName) {
        document.getElementById('managerName').textContent = managerName;
    }

    // 공장명과 공장번호가 있으면 해당 입력 필드에 삽입
    if (factoryName && factoryNumber) {
        document.getElementById('factoryName').value = factoryName;
        document.getElementById('factoryNumber').value = factoryNumber;
    }
});


/* 공장 재고 관리 코드*/
document.addEventListener('DOMContentLoaded', function() {
    const factoryName = localStorage.getItem('factoryName');
    const factoryNumber = localStorage.getItem('factoryNumber');
    const partnerships = JSON.parse(localStorage.getItem('partnerships')) || [];

    if (factoryName && factoryNumber) {
        document.getElementById('factoryName').value = factoryName;
        document.getElementById('factoryNumber').value = factoryNumber;
    }

    const partnershipsList = document.getElementById('partnershipsList');
    partnershipsList.innerHTML = partnerships.map(partnership => `
        <div class="partnership">
            <p>회사 이름: ${partnership.companyName}</p>
            <p>제휴 날짜: ${partnership.date}</p>
        </div>
    `).join('');
});