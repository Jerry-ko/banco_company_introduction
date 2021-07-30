import React, { useEffect } from "react";
import styled from "styled-components";
import Footer from "../../routes/Footer";

const { kakao } = window;

const Container = styled.div``;

const Banner = styled.div`
  width: 100%;
  height: 450px;
  background-image: url("/assets/img/company/banco_office.png");
  background-repeat: no-repeat;
  background-position: center;
`;

const Inner = styled.div`
  width: 1080px;
  margin: 0 auto;
  padding-top: 101px;
  color: #494949;

  > div {
    padding: 60px 0;
    border-top: 1px solid #ddd;

    :first-child { // Introduc
      padding-top: 0;
      border: none;
    }

    h3 {
      font-weight: bold;
      font-size: 24px;
      margin-bottom: 40px;
    }
  }
`;

const Introduc = styled.div`
  h3 {
    font-size: 30px;
  }
  strong {
    font-size: 18px;
    line-height: 2;
  }
`;

const CI = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 200px;
      margin: 0 auto;
    }

    p {
      width: 55%;
      font-size: 14px;
      color: #777;
      line-height: 2;
    }
  }
`;

const Situation = styled.div`
  table {
    width: 100%;
    margin: 0 3%;
    display: flex;

    tbody {
      width:  50%;
      line-height: 2;

      tr {
        th {
          text-align: left;
          font-size: 13px;
          color: #707070;
        }
        td {
          font-size: 14px;
          color: #999;
        }
      }
    }
  }
`;

const Location = styled.div`
#map_head, #map_seoul {
  width: 100%;
  height: 563px;
  margin-bottom: 20px;
}
#map_seoul {
  margin-top: 50px;
}

h6 {
  margin-bottom: 5px;
  color: #a3a2a2;
}
p {
  font-size: 14px;
  font-weight: 500;
  line-height: 2;
  color: #707070;

  &.addr {
    font-weight: 500;
    color: #999;
    margin-bottom: 5px;
  }
  &.tel {
    font-weight: 400;
    margin-top: -5px;
  }
}
`;


const About = () => {
  useEffect(() => {
    //지도를 담을 영역의 DOM 레퍼런스
    const wrapper1 = document.getElementById("map_head");
    const wrapper2 = document.getElementById("map_seoul");

    //지도를 생성할 때 필요한 기본 옵션
    const options1 = {
      center: new kakao.maps.LatLng(35.85151,127.07767), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };
    const options2 = {
      center: new kakao.maps.LatLng(37.50442, 127.04347),
      level: 3
    };

    //지도 생성 및 객체 리턴
    const map1 = new kakao.maps.Map(wrapper1, options1);
    const map2 = new kakao.maps.Map(wrapper2, options2); //지도 생성 및 객체 리턴

    // 마커가 표시될 위치입니다
    const markerPosition1  = new kakao.maps.LatLng(35.85151,127.07767);
    const markerPosition2  = new kakao.maps.LatLng(37.50442, 127.04347);

    // 마커를 생성합니다
    const marker1 = new kakao.maps.Marker({
        position: markerPosition1
    });
    const marker2 = new kakao.maps.Marker({
      position: markerPosition2
  });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker1.setMap(map1);
    marker2.setMap(map2);

    // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
    // marker.setMap(null);
  }, []);


  return(
    <Container>
      <Banner />
      <Inner>
        <Introduc>
          <h3>회사소개</h3>
          <strong>BANCO는 거래소, 게임, 결제, 교육 등 IT 기반의 다양한 사업분야에 진출, 성장해 나가고 있는 글로벌 IT 기업입니다.</strong>
        </Introduc>
        <CI>
          <h3 className="en">CI</h3>
          <div>
            <img src="/assets/img/company/banco_vertical.png" alt="" />
            <p>
              BANCO는 이탈리아어로 대항해시대에 최초로 태동한 금융시스템을 일컫는 말이자 ‘탁자’를 지칭하는 말입니다.
              현대의 은행을 뜻하는 ‘BANK’의 어원이 되는 말입니다.

              신 대륙을 발견하고 새로운 문화와 문물의 시대가 열리게 되었던 대항해시대의 원동력은 금융 시스템이었다고 생각합니다.<br />
              주식회사 뱅코는 현대 사회에서 블록체인이 열어가는 새로운 금융 역시 새로운 시대를 열어가는<br /> 원동력이 될 수 있다고 생각하고 있으며
              블록체인 기술과 금융기술을 통해 블록체인 시대의<br /> 거버넌스를 획득하고 이를 글로벌 시장으로 확대하기 위해 노력하고 있습니다.
            </p>
          </div>
        </CI>
        <Situation>
          <h3 className="en">Current Situation</h3>
          <table>
            <tbody>
              <colgroup>
                <col width="10%" />
                <col width="40%" />
              </colgroup>
              <tr>
                <th>자본금</th>
                <td>984,000 (천원)</td>
              </tr>
              <tr>
                <th>자산 총계</th>
                <td>3,891,673 (천원)</td>
              </tr>
              <tr>
                <th>부채 총계</th>
                <td>1,680,466 (천원)</td>
              </tr>
              <tr>
                <th>자본 총계</th>
                <td>2,211,207 (천원)</td>
              </tr>
            </tbody>
            <tbody>
              <colgroup>
                <col width="10%" />
                <col width="40%" />
              </colgroup>
              <tr>
                <th>임직원 수</th>
                <td>32명</td>
              </tr>
              <tr>
                <th>설립일</th>
                <td>2017년 11월 1일</td>
              </tr>
              <tr>
                <th>대표이사</th>
                <td>민경임</td>
              </tr>
              <tr>
                <th>홈페이지</th>
                <a href="http://www.banco.id" target="_blank" rel="noreferrer">
                  <td>http://www.banco.id</td>
                </a>
              </tr>
              <tr>
                <th>주요 서비스</th>
                <td>블록체인, 인공지능, 기능성 게임</td>
              </tr>
            </tbody>
          </table>
        </Situation>
        <Location>
          <h3 className="en">Location</h3>

          <div id="map_head"></div>
          <h6>본사</h6>
          <p>54858 전라북도 전주시 덕진구 만성북로 21-26, 1동 401호</p>
          <p className="en addr">1-401, 21-26, Manseongbuk-ro, Deokjin-gu, Jeonju-si, Jeollabuk-do, 54858, Republic of Korea</p>

          <div id="map_seoul"></div>
          <h6>연구소</h6>
          <p>06147 서울특별시 강남구 언주로94길 15, 3층</p>
          <p className="en addr">3F, 15, Eonju-ro 94-gil, Gangnam-gu, Seoul, 06147, Republic of Korea</p>
          <p className="en tel">TEL | (02) 1644-5369</p>
        </Location>
      </Inner>
      <Footer />
    </Container>
  );
}

export default About;
