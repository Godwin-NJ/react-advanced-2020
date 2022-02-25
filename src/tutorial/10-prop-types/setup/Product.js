import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ name, image, price }) => {
  // console.log(image, name, price);
  const url = image && image.url;
  return (
    <article className="product">
      <h2>{name}</h2>
      <img src={url || defaultImage} alt={name || "defaultImage"} />
      <h2>${price || 3.99}</h2>
    </article>
  );
};

// Product.propTypes = {
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   image: PropTypes.object.isRequired,
// };

// Product.defaultProps = {
//   name: "default image",
//   price: 3.99,
//   image: defaultImage,
// };

export default Product;
