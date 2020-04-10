export const initialState = 0;
export const COUNT_PLUS = 'COUNT_PLUS'; // count 1을 증가시킬 액션 타입이다.
export const COUNT_MINUS = 'COUNT_MINUS'; // count 1을 감소시킬 액션 타입이다.

export const countPlusAction = () => ({ // 액션 생성 함수
  type: COUNT_PLUS,
});

export const countMinusAction = () => ({
  type: COUNT_MINUS,
});

const CountReducer = (state = initialState, action) => { // 리듀서
  switch (action.type) {
    case COUNT_PLUS:
      return state + 1;
    case COUNT_MINUS:
      return state - 1;
    default:
      return state;
  }
};

export default CountReducer;
