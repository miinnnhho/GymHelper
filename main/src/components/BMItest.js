import Home from "../routes/Home";
import "./BMItest.css";

function Bmi() {
  window.onload = () => {
    const button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);
  };

  function calculateBMI() {
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if (height === "" || isNaN(height)) { //키 input을 적지 않았다면 "키를 입력해 주세요!"를 출력함
      result.innerHTML = "키를 입력해 주세요!";
    } else if (weight === "" || isNaN(weight)) { //몸무게를 적지 않았다면 "몸무게를 입력해 주세요!"를 출력함
      result.innerHTML = "몸무게를 입력해 주세요!";
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2); //bmi를 계산해줌.

      const roundNum = Math.round(bmi * 10) / 10; //소수점 1자리까지 반올림 시킴.

      if (bmi <= 18.5) {
        result.innerHTML = `저체중: <span>${roundNum}</span> <br><br> 균형잡힌 식단과, 근력운동을 권장합니다🤗`;
      } else if (bmi <= 23) {
        result.innerHTML = `정상: <span>${roundNum}</span>`;
      } else if (bmi <= 25) {
        result.innerHTML = `과체중: <span>${roundNum}</span>`;
      } else if (bmi <= 30) {
        result.innerHTML = `비만: <span>${roundNum}</span>`;
      } else {
        result.innerHTML = `고도비만: <span>${roundNum}</span>`;
      }
    }
  }
  return (
    <>
      <Home />
      <div className="container">
        <h1>BMI 계산기</h1>

        <p>키 (cm)</p>
        <input type="text" id="height" />

        <p>몸무게 (kg)</p>
        <input type="text" id="weight" />

        <button id="btn">계산하기</button>

        <div id="result"></div>
      </div>
    </>
  );
}

export default Bmi;
