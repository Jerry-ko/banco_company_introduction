import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Container = styled.div`
  position: relative;
  height: 100vh;
`;

const Inner = styled.div`
  width: 100%;
  min-width: 1900px;
  height: calc(100vh - 152px);
  background: linear-gradient(115deg, pink, #6d36ee 50%);
  position: relative;
  color: white;

  .text_box {
    position: absolute;
    top: 53.5%;
    left: 180px;
    right: 180px;

    .title {
      margin-bottom: 30px;
      font-size: 60px;
      font-weight: bold;
      line-height: 1.02;

      span {
        font-size: 45px;
      }
    }

    .text {
      font-size: 22px;
      line-height: 1.36;
    }
  }

  img {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const Notice = styled.div`
  width: 100%;
  height: 54px;
  background-color: white;
  padding-left: 180px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;

  strong {
    margin-right: 25px;
    font-size: 16px;
    font-weight: bold;
    color: #494949;
  }

  a {
    font-size: 14px;
    color: #494949;

    :hover {
      text-decoration: underline;
    }
  }
`;

const Home = () => {
  return(
    <Container>
      <Inner>
        <div className="text_box">
          <h3 className="title en">Creates Value<br /><span>through technology and convergence</span></h3>
          <p className="text">기술과 융합으로 새로운 가치를 창조하는 기업</p>
        </div>
        <img src="/assets/img/home/graphic.png" alt="" />
        <Notice>
          <strong className="en">NOTICE</strong>
          <Link to="">BANCO 개인정보처리방침 변경에 대한 안내</Link>
        </Notice>
      </Inner>
      <Footer path="/" />
    </Container>
  );
}

export default Home;
