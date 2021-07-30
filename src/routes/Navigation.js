import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid #d8d8d8;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 100;

  ${(props) => props.activePage === "/" && css`
    border-bottom: none;
    background-color: transparent;
    position: absolute;
    top: 0;
  `}

`;

const Inner = styled.div`
  width: 1080px;
  min-width: 1080px;
  height: 101px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  .logo {
    img {
      width: 125px;
    }
  }

  ${(props) => props.activePage === "/" && css`
    width: 100%;
    padding: 0 180px;

    .nav a {
      color: white;

      :hover {
        color: pink;
      }
    }
  `}
`;

const SLink = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: #333;
  margin-left: 60px;

  :hover, &.on {
    color: #6d36ee;
  }
`;

const Sub = styled.div`
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #d8d8d8;
  position: absolute;
  z-index: 50;
  ${props => !props.isShown && css`
    display: none;
  `}

  ${(props) => props.activePage === "/" && css`
    display: none;
  `}

  ul.sub-list {
    width: 1080px;
    min-width: 685px;
    height: 49px;
    margin: 0 auto;
    position: relative;
    background-color: white;

    li {

      &.on ul.sub-list_row {
        visibility: visible;
      }

      :nth-child(1) ul.sub-list_row {
        right: 40px;
      }
      :nth-child(2) ul.sub-list_row {
        right: -5px;
      }
      :nth-child(3) ul.sub-list_row {
        right: -5px;
      }

      ul.sub-list_row {
        height: 49px;
        display: flex;
        position: absolute;
        visibility: hidden;

        li {
          height: 49px;
          margin-left: 40px;
          display: flex;
          align-items: center;
          border-bottom: 2px solid white;

          :hover, &.on {
            border-color: #6d36ee;

            a {
              color: #6d36ee;
            }
          }

          a {
            font-size: 14px;
            color: #999;
          }
        }
      }
    }
  }
`;

const Navigation = () => {
  // 현재 페이지 path & 페이지별 로고 색깔(주소) 다르게
  const [activePage, setActivePage] = useState("/");
  const [logoUrl, setLogoUrl] = useState("/assets/img/banco_white.png");

  const clickLogo = () => {
    setActivePage("/");
    setLogoUrl("/assets/img/banco_white.png");
  }

  const clickMenu = (e) => {
    // 클릭한 메뉴에 .on 추가
    const slinkList = document.querySelectorAll(SLink);
    slinkList.forEach(selector => {
      selector.classList.remove("on");
    });
    e.target.classList.add("on"); // SLink

    // 클릭한 메뉴의 첫번째 하위 아이템에 .on 추가
    const subRowList = document.querySelectorAll(".sub-list_row");
    subRowList.forEach(ul => {
      ul.childNodes.forEach(li => {
        li.classList.remove("on");
      })
    });
    if (e.target.pathname === "/company/about") {
      subRowList[0].children[0].classList.add("on");
    } else if (e.target.pathname === "/service") {
      subRowList[1].children[0].classList.add("on");
    } else if (e.target.pathname === "/pr/article") {
      subRowList[2].children[0].classList.add("on");
    }

    setShowSub(false);
    setActivePage(e.target.pathname);
    setLogoUrl("/assets/img/banco_black.png");
  }

  useEffect(()=>{
    setActivePage(window.location.pathname);

    if (window.location.pathname === "/")
      setLogoUrl("/assets/img/banco_white.png");
    else
      setLogoUrl("/assets/img/banco_black.png");
  }, []);

  // 선택한 메뉴의 path와 일치하는 클래스(하위 메뉴) 띄우기
  const [showSub, setShowSub] = useState(false);

  const hoverMenu = (e) => {
    // 마우스 올린 메뉴의 하위 메뉴에 .on 추가
    const subList = document.querySelector(".sub-list").childNodes;
    subList.forEach(selector => {
      selector.classList.remove("on");
    });
    const menu = document.getElementsByClassName(`${e.target.pathname}`);
    menu[0].classList.add("on");

    setShowSub(true);
  }

  const hoverOutSub = () => {
    const subList = document.querySelector(".sub-list").childNodes;
    subList.forEach(selector => {
      selector.classList.remove("on");
    });

    setShowSub(false);
  }

  const clickSub = (e) => {
    // 클릭한 하위 아이템에 .on 추가
    const subRowList = document.querySelectorAll(".sub-list_row");
    subRowList.forEach(ul => {
      ul.childNodes.forEach(li => {
        li.classList.remove("on");
      })
    })
    e.target.parentNode.classList.add("on"); // li

    // 클릭한 아이템의 상위 메뉴에 .on 추가
    const slinkList = document.querySelectorAll(SLink);
    slinkList.forEach(selector => {
      selector.classList.remove("on");
    });
    const path = e.target.parentNode.parentNode.parentNode.classList[0];
    if (path === "/company/about") {
      slinkList[0].classList.add("on");
    } else if (path === "/service") {
      slinkList[1].classList.add("on");
    } else if (path === "/pr/article") {
      slinkList[2].classList.add("on");
    }
  }

  return(
    <>
      <Container activePage={activePage}>
        <Inner activePage={activePage}>
            <div className="logo">
              <Link to="/" onClick={clickLogo}>
                <img src={logoUrl} alt="" onClick={clickLogo} />
              </Link>
            </div>
            <div className="nav en">
              <SLink to="/company/about" onClick={clickMenu} onMouseEnter={hoverMenu}>banco</SLink>
              <SLink to="/service" onClick={clickMenu} onMouseEnter={hoverMenu}>services</SLink>
              <SLink to="/pr/article" onClick={clickMenu} onMouseEnter={hoverMenu}>pr</SLink>
            </div>
        </Inner>
      </Container>
      <Sub isShown={showSub} onMouseLeave={hoverOutSub} activePage={activePage}>
          <ul className="sub-list">
            <li className="/company/about">
              <ul className="sub-list_row">
                <li><Link to="/company/about" onClick={clickSub}>회사소개</Link></li>
                <li><Link to="/company/history" onClick={clickSub}>연혁</Link></li>
                <li><Link to="/company/organization" onClick={clickSub}>조직도</Link></li>
                <li><Link to="/company/certificate" onClick={clickSub}>특허/인증</Link></li>
              </ul>
            </li>
            <li className="/service">
              <ul className="sub-list_row">
                <li><Link to="/service" onClick={clickSub}>전체서비스</Link></li>
                <li><Link to="/service/borabit" onClick={clickSub}>거래소</Link></li>
                <li><Link to="/service/game" onClick={clickSub}>게임</Link></li>
                <li><Link to="/service/edu" onClick={clickSub}>에듀테크</Link></li>
                <li><Link to="/service/etc" onClick={clickSub}>기타</Link></li>
              </ul>
            </li>
            <li className="/pr/article">
              <ul className="sub-list_row">
                <li><Link to="/pr/article" onClick={clickSub}>언론기사</Link></li>
                <li><Link to="/pr/promotion" onClick={clickSub}>홍보영상</Link></li>
              </ul>
            </li>
          </ul>
      </Sub>
    </>
  );
}

export default Navigation;
