import React from "react";
import styled from "styled-components";
//npm install styled-components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//npm i --save @fortawesome/free-brands-svg-icons
import { faGithub } from "@fortawesome/free-brands-svg-icons";
//npm install --save @fortawesome/fontawesome-free.
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Foot = styled.div`
  background-color: #39ff9f;
  color: #666828;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.a`
  cursor: pointer;
  font-size: 2em;
  color: #111;
  font-family: "Palatino Linotype";
  font-weight: 600;
`;

const MoveGithub = styled.a`
  font-size: 2em;
  margin-right: 20px;
`;

const MoveBlog = styled.span`
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 10px;
`;

const Blog = styled.a``;

const BlogBox = styled.div`
  ${Blog} {
    line-height: 1.5em;
    :hover {
      color: aliceblue;
    }
  }
  display: flex;
  // on off 설정위한 props 삽입
  visibility: ${(props) => (props.className === "on" ? "visible" : "hidden")};
  flex-direction: column;
  position: absolute;
  right: 20px;
  margin-bottom: 160px;
  padding: 20px;
  border: 1px solid #ffff;
`;

const Footer = () => {
  const [pageOn, setPageOn] = useState(false);
  const onMouseEnter = (e) => {
    setPageOn(true);
  };
  const onMouseLeave = (e) => {
    setPageOn(false);
  };

  return (
    <Foot>
      <div>
          <Title>ESSENCE</Title>
        <div>Copyright © 2022 . All rights reserved.</div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <MoveGithub
          target="_blank"
          href="https://github.com/codestates/beb-04-second-Essence"
        >
          <FontAwesomeIcon icon={faGithub} />
        </MoveGithub>
        <MoveBlog
          onMouseEnter={(e) => onMouseEnter(e)}
          onMouseLeave={(e) => onMouseLeave(e)}
        >
          <FontAwesomeIcon icon={faBlog} style={{ fontSize: "2em" }} />
          <BlogBox className={pageOn ? "on" : "off"}>
            <Blog target="_blank" href="https://velog.io/@j10501">
             강윤채 https://velog.io/@j10501
            </Blog>
            <Blog target="_blank" href="https://velog.io/@bdg4611">
              최호준 https://velog.io/@bdg4611
            </Blog>
            <Blog target="_blank" href="https://velog.io/@wnsghchl">
              안효승 https://velog.io/@wnsghchl/
            </Blog>
            <Blog target="_blank" href="https://velog.io/@genius_jihyepark">
              박지혜 https://velog.io/@genius_jihyepark/
            </Blog>
          </BlogBox>
        </MoveBlog>
      </div>
    </Foot>
  );
};
export default Footer