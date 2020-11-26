const countdownTitle = document.querySelector("h1");
const countdownText = document.querySelector(".text");
const countdownContainer = document.querySelector(".countdown");
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const year = document.querySelector(".year");

function countdown() {
  const today = new Date();
  // month 1월은 0으로 인식하므로, 11월은 10!!
  const isItNov23 = today.getMonth() === 10 && today.getDate() === 26;
  const yearOfBday = today.getFullYear();
  let birthday = new Date(`Nov 26 ${yearOfBday}`);
  
  // 화면 하단에 해당되는 연도 표시
  year.innerText = yearOfBday;
  
  // 생일이 지난 경우 d-day 카운트를 내년으로 넘겨주기
  // 2020년 11월 24일이 되면, 2021년 11월 23일 기준으로 디데이 카운팅
  if (today > birthday) {
    birthday = new Date(`Nov 26 ${yearOfBday + 1}`);
  }

  const diff = birthday.getTime() - today.getTime();

  let s = Math.floor(diff / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);

  h %= 24;
  m %= 60;
  s %= 60;

  if (isItNov23) {
    // 생일날이 되면 countdown 내용이 없어지고 생일 축하 문구가 따단!
    countdownTitle.innerText = "Amy Happy Birthday!";
    countdownText.innerText = "에이미 생일 축하하고 내가 많이많이 사랑해"
    countdownContainer.style.display = "none";
  } else {
    days.innerText = `${d < 10 ? `0${d}` : d}`;
    hours.innerText = `${h < 10 ? `0${h}` : h}`;
    minutes.innerText = `${m < 10 ? `0${m}` : m}`;
    seconds.innerText = `${s < 10 ? `0${s}` : s}`;
  }
}

countdown();
setInterval(countdown, 1000);