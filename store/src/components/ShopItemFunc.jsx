import React from 'react';
import PropTypes from 'prop-types';

const ShopItem = (props) => {
  console.log(props)
  return (
    <div className="main-content">
      <h2>{props.item.brand}</h2>
      <h1>{props.item.title}</h1>
      <h3>{props.item.description}</h3>
      <div className="description">{props.item.descriptionFull}</div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{props.item.price + ' ' + props.item.currency}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
}

ShopItem.propTypes = {
  brand: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  descriptionFull: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
}

export default ShopItem;