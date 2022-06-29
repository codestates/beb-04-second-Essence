// 액션
const SET_USER = "SET_USER";
const UNSET_USER = "UNSET_USER";

// 액션 생성 함수
export const setUser = (data) => {
  return {
    type: SET_USER,
    data,
  };
};

export const unsetUser = () => {
  return {
    type: UNSET_USER,
  };
};

//초기 상태
const initialState = {
  data: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        data: action.data,
      };
    case UNSET_USER:
      return {
        data: null,
      };
    default:
      return state;
  }
}
//리듀서는 함수, 리듀서는 state, action 2개의 매개변수!!
//리듀서는 초기 설정 필요!

export default reducer;
//리듀서 수출  => 스토어에서 가져올수있음
