import { createStore } from "redux";
import reducer from "./reducer";
// createStore을 쓰려고했으나 최신리덕스 redux toolkit사용할지 고민중...

//Provider에 store => redux-persist 적용 완료
//Reducer 스토어에 맞춰줘야하므로 추가해야함

let store = createStore(reducer);

export default store;
//store 수출

//persist, root Reducer .... 설정 고민
