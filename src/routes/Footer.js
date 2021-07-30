import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  padding: 39px 180px 50px 180px;
  border-top: 1px solid #d8d8d8;

  ${props => props.path === "/" && css`
    position: absolute;
    bottom: 0;
  `}

  > div {
    display: flex;
    justify-content: space-between;

    a {
      font-size: 14px;
      line-height: 18px;
      color: #999;

      :hover {
        text-decoration: underline;
      }
    }

    ul {
      display: flex;

      li {
        margin-right: 37px;
      }
    }

    .family-site:hover {
        color: #494949;
        text-decoration: none;
      }
    }
  }

  .copyright {
    padding-top: 30px;
    font-size: 14px;
    color: #999;
    font-weight: 300;
  }

`;

const Footer = ({path}) => {
  return(
    <Container path={path}>
      <div>
        <ul>
          <li><Link to="">제휴제안</Link></li>
          <li><Link to="">기업윤리</Link></li>
          <li><Link to="">개인정보 처리방침</Link></li>
        </ul>
        <Link to="" className="family-site en">FAMILY SITE</Link>
      </div>
      <p className="copyright en">©  BANCO Corp. All rights reserved.</p>
    </Container>
  );
}

export default Footer;
