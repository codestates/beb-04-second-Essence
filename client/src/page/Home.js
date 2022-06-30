import React, { useEffect, useState } from "react";
import PostCard from "../component/PostCard";
import PostWrite from "../component/PostWrite";
import { Container, Row, Col } from "react-bootstrap";

// 전체 게시글이 보이도록 설정

// npm installl -g json-server  설치
// object text 인 json 파일 형성요구 db.json
// ex =>{ "id": 1, "title": "json-server", "author": "typicode" }형식
// json-server --watch db.json    => db.json에 데이터를 넣는것을 호출한다
// Routes GET POST  PUT PATCH DELETE

// db.json 파일을 만든 후, 데이터 작성
// key 값 products
// $ json-server --watch db.json --port 5000    =>5000포트에 서버실행
//   http://localhost:5000/posts에  확인가능

const Home = () => {
  const [postlist, setPostlist] = useState([]);
  const getPosts = async () => {
    let url = `http://localhost:5000/posts/`;
    // db데이터 url로 불러오기
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    //data 콘솔로 확인 후 보여주기 uesState 이용
    setPostlist(data);
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <PostWrite />

      <Container>
        <Row>
          {postlist.map((list) => (
            <Col >
              <PostCard item={list} />
            </Col>
          ))}
          {/* <Col>
            <PostCard />
          </Col>{" "}
          <Col>
            <PostCard />
          </Col>{" "}
          <Col>
            <PostCard />
          </Col> */}
        </Row>
      </Container>
      {/* 례이아웃진행 */}
      {/* 적당한 중앙사이즈를 넣기위한 container사용(부트트랩) */}
    </div>
  );
};

export default Home;
