/* eslint-disable object-curly-newline */
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countPlusAction, countMinusAction } from '../redux/reducers/count';
import Pagination from '../components/pagination';
import Layout from '../components/Layout';
import { SET_CURRENT_PAGE } from '../redux/reducers/car';

const App = () => {
  const carState = useSelector((state) => state.car);
  const dispatch = useDispatch();

  const { pageSize, currentPage } = carState;
  const { length: count } = carState.cars;
  const handlePageChange = (page) => {
    dispatch({ type: SET_CURRENT_PAGE, page });
  };

  const paginate = (_possible, _currentPage, _pageSize) => {
    const startIndex = (_currentPage - 1) * _pageSize;
    return _possible.slice(startIndex, _currentPage * _pageSize);
  };
  const info = paginate(carState.cars, currentPage, pageSize);

  const dayPicker = () => {
    console.log('day_picker');
  };
  return (
    <Layout>
      <form>
        <table>
          <tbody>
            <tr>
              <td>대여일자</td>
              <td>
                <div>
                  <span className="spanStyle">
                    <div className="day">
                      <input type="text" onClick={dayPicker} />
                    </div>
                  </span>
                  <span className="spanStyle">
                    <span>달력</span>
                  </span>
                  <span className="spanStyle">
                    <div className="day">
                      <input type="text" onClick={dayPicker} />
                    </div>
                  </span>
                  <span className="spanStyle">
                    <span>달력</span>
                  </span>
                </div>
              </td>
              <td rowSpan="3" className="vertical_line_td">
                <div className="vertical_line" />
              </td>
              <td>검색항목</td>
              <td>차량번호input 검색어 입력 input</td>
              <td rowSpan="3" className="vertical_line_td">
                <div className="vertical_line" />
              </td>
              <td rowSpan="3">
                <button type="submit">검사</button>
              </td>
            </tr>
            <tr>
              <td>보험연령</td>
              <td>보험연령 input</td>
              <td>차량등급</td>
              <td>차량등급 input</td>
            </tr>
            <tr>
              <td>사용연료</td>
              <td>사용연료 input</td>
              <td>차량색상</td>
              <td>차량색상 input</td>
            </tr>
          </tbody>
        </table>
      </form>
      <div>
        <div className="row_line" />
      </div>
      <div className="div_table_header">
        <div>차량번호</div>
        <div>차량모델</div>
        <div>차량색상</div>
        <div>차량연식</div>
        <div>차량등급</div>
        <div>연료</div>
        <div>보험 연령</div>
        <div>차량위치</div>
        <div>영업점</div>
      </div>
      { count === 0
        ? 'no data'
        : info.map((v, i) => (
          <div key={i} className="div_table_content">
            <div>{v.car_number}</div>
            <div>{v.car_model}</div>
            <div>{v.color}</div>
            <div>{v.year}</div>
            <div>{v.rating}</div>
            <div>{v.fuel}</div>
            <div>{v.insurance_age}</div>
            <div>{v.location}</div>
            <div>{v.branch}</div>
          </div>
        ))}
      {}
      <div id="div_table_footer">
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <style jsx>
        {`
          table{
            width:100%;
            border-collapse:collapse;
          }
          table td{
            height:30px;
            padding-left:calc(10px);
            padding-right:calc(10px);
          }
          .div_table_header, .div_table_content{
            display:flex;
            align-items: stretch;
          }
          .div_table_header div, .div_table_content div{
            width:100%;
            height:50px;
            line-height:50px;
            padding-left:calc(10px);
            padding-right:calc(10px);
            max-width: 100%;
            min-width: 100px;
            border-bottom:1px solid #BDBDBD;
            cursor: pointer;
          }
          .div_table_content:hover{
            background-color:#BDBDBD;
          }
          .row_line{
            margin:10px 0;
            width:100%;
            height:1px;
            background-color:#BDBDBD;
          }
          .vertical_line_td{
            padding:0 !important;
            width:40px;
          }
          .vertical_line{
            margin-left:20px;
            width:1px;
            height:100%;
            background-color:#BDBDBD;
          }
          .spanStyle{
            display: inline-block;
          }
          .spanStyle>div>input{
            width:60px;
          }
          .spanStyle p{
            width:50px;
          }
        `}
      </style>
      {/* {count}
      <button type="button" onClick={minus}>-</button>
      <button type="button" onClick={plus}>+</button> */}
    </Layout>
  );
};

export default App;
