
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Login2 from "./page/Login2";
import Signup from "./page/Signup";
import Mypage from "./page/Mypage";
import Post from "./page/Post";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

// 부트트랩 npm install react-bootstrap bootstrap설치후 import => layout 사용예정
// layout은 한줄에 몇개 들어가는지를 말함

//1. 페이지 라우팅 => 홈페이지, 로그인페이지, nft페이지
//2. 로그인버튼누르면 로그인파에지가 나온다
//3. 상단바
function App() {

  
  return (
    <div>
      <Navbar />
      {/* 네비게이션바 = > 컴포넌트 */}
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/login" element={<Login2 />} />
        <Route path="/post/:id" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<Mypage />} />
        {/* 3개 페이지형성  id만 Restful Route(REST API) 규칙을 따름*/}
      </Routes>
      <Footer />
      {/*지혜 바꿈 */}
    </div>
  );
}

export default App;
