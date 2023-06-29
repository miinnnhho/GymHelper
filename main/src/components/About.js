// 홈을 만들어서 기본 인덱스 화면으로 두고,
//카테고리를 만들어 컴포넌트 값들 넣기
//
// import { Link } from "react-router-dom";
import "./About.css";
import Home from "../routes/Home";
function About() {
  return (
    <div>
      <Home />
      <p>어바웃 설명 좌라락</p>
    </div>
  );
}

export default About;
