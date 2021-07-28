import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 152px - 101px);
  overflow-y: scroll;
`;

const Inner = styled.div`
  max-width: 1500px;
  min-width: 1080px;
  margin: 0 auto;

  h3 {
    font-weight: bold;
    font-size: 24px;
    color: #494949;
    margin: 40px 0 60px;
  }
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #3e3a39;


`;


const Year = styled.div`
  width: 49%;

  div {
    font-size: 139px;
    font-weight: bold;
    position: sticky;
    top: 50px;
  }
`;

const Result = styled.div`
  width: 51%;

  div {
    margin-bottom: 282px;

    p {
      font-size: 25px;
      padding-bottom: 35px;
      line-height: 2;
      // line-height: 3;
    }
  }
`;

const History = () => {
  const [year, setYear] = useState(2020);

  const changeYear = (e) => {
    const top = e.target.scrollTop;
    console.log(top);

    if (top < 400) {
      setYear(2020);
    } else if (400 <= top && top < 900) {
      setYear(2019);
    } else if (900 <= top && top < 1610) {
      setYear(2018);
    } else if (1610 <= top && top < 2490) {
      setYear(2017);
    } else if (2490 <= top && top < 2940) {
      setYear(2016);
    } else if (2940 <= top && top < 3390) {
      setYear(2015);
    } else if (3390 <= top && top < 4100) {
      setYear(2014);
    } else if (4100 <= top && top < 4550) {
      setYear(2013);
    } else if (4550 <= top && top < 5000) {
      setYear(2012);
    } else if (5000 <= top && top < 5420) {
      setYear(2011);
    } else if (5420 <= top && top < 5850) {
      setYear(2010);
    } else if (5850 <= top && top < 6400) {
      setYear(2009);
    } else if (6400 <= top && top < 6850) {
      setYear(2008);
    } else if (6850 <= top && top < 7400) {
      setYear(2006);
    } else if (7400 <= top) {
      setYear(2005);
    }
  }

  return(
    <Container onScroll={changeYear}>
      <Inner>
        <h3 className="en">History</h3>
        <Contents>
          <Year>
            <div className="en">{year}</div>
          </Year>
          <Result>
            <div className="2020">
              <p>승람도 AR 보드게임</p>
              <p>프리드로우 VR 실감형 콘텐츠 저작툴</p>
              <p>올림픽공원 휴먼센싱 스마트트랙 조성</p>
              {/* <p>ISMS-P 인증완료</p> */}
              {/* isms.p 사진 */}
            </div>
            <div className="2019">
              <p>퍼플카드Lite 개발</p>
              <p>퍼플페이먼트 시스템 개발</p>
              <p>액션골프 센서기반 게임</p>
              {/* <p>기업실사 조사완료!</p> */}
              {/* 금융위원회 사진 */}
            </div>
            <div className="2018">
              <p>이더리움기반 ERC20 토큰 BANG</p>
              <p>멀티체인기반 MAINNET 마이닝 풀 개발</p>
              <p>뱅코 블록체인 개발 및 안정화</p>
              <p>뱅코 블록체인용 마이닝풀 개발</p>
              <p>차세대 암호화폐 거래소 보라빛 개발</p>
            </div>
            <div className="2017">
              <p>COINDTS 암호화폐 Meta 트레이더 개발</p>
              <p>CoinNoon 암호화폐 웹기반 거래소 개발</p>
              <p>맥스봇 재정거래 전용 솔루션 개발</p>
              <p>Banco Price 실시간 폭등 알림 시스템</p>
              <p>암호화폐 재정거래 솔루션</p>
              <p>암호화폐 거래용 TOKEN 개발</p>
              <p>㈜BANCO 설립, 벤쳐기업 인증</p>
            </div>
            <div className="2016">
              <p>소규모 사설증권사, 선물, 옵션, FX마진거래 솔루션</p>
              <p>모의 주식투자 대회</p>
            </div>
            <div className="2015">
              <p>SMS캐스터 장비를 이용한 하드웨어 연동 자동화 솔루션</p>
              <p>대신증권 Customized HTS – ELW 스켈핑 거래</p>
            </div>
            <div className="2014">
              <p>코스콤 거래소 DMA 솔루션 개발</p>
              <p>동부증권 HTS, 선물, 옵션 거래</p>
              <p>현대증권 HTS, ELW 스켈핑, 옵션차액거래</p>
              <p>한맥증권 HTS, ELW 스켈핑</p>
              <p>KTB 증권 HTS, ELW 스켈핑</p>
            </div>
            <div className="2013">
              <p>대여계좌 솔루션 (사설증권사) Server, Client HTS 시스템전체구성 개발</p>
              <p>모의투자 대회용 Server, Client HTS 시스템 전체구성 개발</p>
            </div>
            <div className="2012">
              <p>FX마진, 시카고 해외선물 거래솔루션</p>
              <p>홍콩 워런트 거래 솔루션(Server, Client) 전체시스템 개발</p>
            </div>
            <div className="2011">
              <p>홍콩 워런트 거래 솔루션 (Server, Client) 고도화<br />(ULLINK, DBpower, KDB대우증권)</p>
            </div>
            <div className="2010">
              <p>중국 운전면허 시험 APP개발 (안드로이드)</p>
              <p>프로젝트 LEARN 자율 참여형 학습 APP개발 (안드로이드, iOS)</p>
            </div>
            <div className="2009">
              <p>각종 SNS 자동화 소프트웨어 개발</p>
              <p>SQL Injection 취약점 분석 도구 개발</p>
              <p>포털 실시간 검색어 키워드를 기준으로 자동뉴스 생성</p>
            </div>
            <div className="2008">
              <p>Cheat Engine 컨버팅 및 모듈 개발</p>
              <p>한국형 프로세스 메모리 에디터 개발</p>
            </div>
            <div className="2006">
              <p>2D 슈팅게임</p>
              <p>3D 모션센서를 적용한 골프게임</p>
              <p>화면 캡쳐 및 동영상 제작 소프트웨어 개발</p>
            </div>
            <div className="2005">
              <p>API HOOK을 이용한 프로세스 변조 개발</p>
              <p>온라인 보드게임 (중국) 런칭</p>
              <p>보드게임 (틀린 그림 찾기 등) 개발</p>
              <p>DDK, 하드웨어 드라이버 (키보드, 마우스, 화상캠) 개발</p>
            </div>
          </Result>
        </Contents>
      </Inner>
    </Container>
  );
}

export default History;
