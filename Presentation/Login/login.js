// 각 언어에 대한 텍스트를 저장한 객체
const translations = {
    en: {
      title: "NAVER : Login",
      idPlaceholder: "Username",
      passwordPlaceholder: "Password",
      keepText: "Keep me logged in",
      ipSecurity: "IP Security",
      submitButton: "Login",
      forgotPassword: "Forgot Password",
      forgotId: "Forgot ID",
      signup: "Sign Up",
    },
  
    ko: {
      title: "네이버 : 로그인",
      idPlaceholder: "아이디",
      passwordPlaceholder: "비밀번호",
      keepText: "로그인 상태 유지",
      ipSecurity: "IP보안",
      submitButton: "로그인",
      forgotPassword: "비밀번호 찾기",
      forgotId: "아이디 찾기",
      signup: "회원가입",
    },
  };
  
  // 언어 선택기 요소 가져오기
  const langSelect = document.getElementById("lang");
  
  // 언어 변경 함수
  function changeLanguage() {
    const selectedLang = langSelect.value;
  
    // data-key 속성을 사용하여 텍스트 변경
    document.querySelectorAll("[data-key]").forEach((element) => {
      const key = element.getAttribute("data-key");
      const translation = translations[selectedLang][key];
      if (element.placeholder) {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    });
  
    // 타이틀 변경
    document.title = translations[selectedLang].title;
  }
  // 선택기가 변경될 때 언어 변경 함수 호출
  langSelect.addEventListener("change", changeLanguage);
  // 페이지 로드 시 초기 언어 설정
  document.addEventListener("DOMContentLoaded", changeLanguage);
  
  // JavaScript에서 Kakao 로그인 버튼 클릭 이벤트 처리
  const kakaoLoginButton = document.querySelector(".kakao");
  kakaoLoginButton.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 동작(폼 전송) 방지
    const clientId = "74e5bdc962c07f39a8ca29ade0b276b5";
    const redirectUri = "http://127.0.0.1:8080/kakao-login";
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
    window.location.href = kakaoAuthUrl; // 인증 URL로 이동
  });
  