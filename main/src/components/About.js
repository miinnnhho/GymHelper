import "./About.css";
import Home from "../routes/Home";
// import GymPic from '../img/gym.png';

function About() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));

  return (
    <div>
      <Home />
      <div>
        <section className="hidden">
          <h1>저는요.</h1>
          <p>
            혼자 운동을 하며 궁금하거나, 모르는 게 있을 순간을 위해 탄생했어요!
          </p>
        </section>

        <section className="hidden">
          <h2>이 기구 사용법이 뭐지..?</h2>
          <p>머신에 보면 회사명 있죠?</p>
          <p>검색만 해주세요!</p>
          <p>운동방법이 담긴 영상을 보여드릴게요!</p>
          <div className="logos">
            <div className="logo hidden">
              <img src={require("../img/gym.png")} alt="gym" />
            </div>
          </div>
        </section>

        <section className="hidden">
          <h2>집 근처엔 없을까?</h2>
          <p>집 근처 가까운 운동시설을 검색 해보세요!</p>
          <p>바로 알려드릴게요!</p>
          <div className="logos">
            <div className="logo hidden">
              <img src={require("../img/run.png")} alt="run" />
            </div>
          </div>
        </section>

        <section className="hidden">
          <h2>도와줘..!!</h2>
          <p>처음에 막막하죠..</p>
          <p>식단..루틴..무슨 말이지🤯</p>
          <p>가장 간단하고, 쉬운 방법으로 알려줄게요!</p>
          <div className="logos">
            <div className="logo hidden">
              <img src={require("../img/food.png")} alt="food" />
            </div>
          </div>
        </section>

        <section className="hidden">
          <h2>같이 화이팅 해봐요!</h2>
        </section>

        <div className="moveTopBtn">맨 위로</div>
      </div>
    </div>
  );
}

export default About;
