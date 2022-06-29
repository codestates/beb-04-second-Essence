import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
// import { PersistGate } from "redux-persist/lib/integration/react";
// import { persistStore } from "redux-persist";
//리액트 라우터 import하였음 + 리덕스 Provider

// const persistor = persistStore(store);
// //persist stor불러옴

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <PersistGate loading={<Loading />} persistor={persistor}> */}
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
    {/* </PersistGate> */}
  </Provider>
);
//리액트 라우터 감싸줬음

//TODO : 1.리덕스 감싸주기 !!!!!!!!!!!!!!!!!!!!!!!!=> 설정해주기
//리덕스를 적용하기위해 provider라는 컴포넌트로 감싸줘서 진행
// 스토어 만들어줘야함!!
