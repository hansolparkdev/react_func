/* eslint-disable object-curly-spacing */
/* eslint-disable object-curly-newline */
import React, { useState, Fragment } from 'react';

const ProductCategoryRow = () => {
  console.log('ProductCategory');
  return (
    <Fragment>
      <div>
        카테고리목록
      </div>
    </Fragment>
  );
};

const ProductRow = () => {
  console.log('ProductRow');
  return (
    <Fragment>
      <div>
        제품목록
      </div>
    </Fragment>
  );
};
const ProductTable = (props) => {
  // console.log(props);
  const { filterText, inStockOnly, products } = props;
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.indexOf(filterText) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow />,
      );
    }
    rows.push(
      <ProductRow />,
    );
    lastCategory = product.category;
  });

  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </Fragment>
  );
};

const SearchBar = (props) => {
  console.log('SearchBar');
  const { filterText, inStockOnly, onFilterTextChange, onInStockChange} = props;
  const handleFilterTextChange = (e) => {
    onFilterTextChange(e.target.value);
  };
  const handleInStockChange = (e) => {
    onInStockChange(e.target.checked);
  };
  return (
    <Fragment>
      <form action="">
        <input
          type="text"
          placeholder="search...."
          value={filterText}
          onChange={handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={handleInStockChange}
          />
          {' '}
          only show products in stock
        </p>

      </form>
    </Fragment>
  );
};

const FilterableProductTable = () => {
  const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
  ];

  console.log(PRODUCTS);

  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const handleFilterTextChange = (_filterText) => {
    setFilterText(_filterText);
  };
  const handleInStockChange = (_inStockOnly) => {
    setInStockOnly(_inStockOnly);
  };

  return (
    <Fragment>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        products={PRODUCTS}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </Fragment>
  );
};

export default FilterableProductTable;
