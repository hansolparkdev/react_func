/* eslint-disable object-curly-newline */
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

// export const countPlusAction = () => ({ // 액션 생성 함수
//   type: COUNT_PLUS,
// });

// export const countMinusAction = () => ({
//   type: COUNT_MINUS,
// });

export const initialState = {
  pageSize: 10,
  currentPage: 1,
  cars: [
    { car_number: 1, car_model: '셀토스', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 2, car_model: '코나', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 3, car_model: '셀토스', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 4, car_model: '코나', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 5, car_model: '셀토스', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 6, car_model: '셀토스', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 7, car_model: '코나', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 8, car_model: '셀토스', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 9, car_model: '코나', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 10, car_model: '코나', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 11, car_model: '셀토스', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 12, car_model: '코나', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 13, car_model: '셀토스', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 14, car_model: '코나', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 15, car_model: '셀토스', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 16, car_model: '코나', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 17, car_model: '셀토스', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 18, car_model: '코나', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 19, car_model: '셀토스', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 20, car_model: '셀토스', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 21, car_model: '코나', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 22, car_model: '셀토스', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 23, car_model: '셀토스', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 24, car_model: '코나', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 25, car_model: '셀토스', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 26, car_model: '셀토스', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 27, car_model: '코나', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 28, car_model: '코나', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
    { car_number: 29, car_model: '셀토스', color: 'black', year: '14년식', fuel: '가솔린', rating: '소형', insurance_age: 20, location: '청계산', branch: '강남점' },
  ],
};

const carReducer = (state = initialState, action) => { // 리듀서
  switch (action.type) {
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.page };
    }
    default:
      return state;
  }
};

export default carReducer;
