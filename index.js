import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import logo from "./src/images/logo.svg";
import ImageCart from "./src/images/icon-cart.svg";
import UserImage from "./src/images/image-avatar.png";
import MainImage from "./src/images/image-product-1.jpg";
import MainImage1 from "./src/images/image-product-1.jpg";
import MainImage2 from "./src/images/image-product-2.jpg";
import MainImage3 from "./src/images/image-product-3.jpg";
import shoeImg from "./src/images/image-product-1-thumbnail.jpg";
import plus from "./src/images/icon-plus.svg";
import minus from "./src/images/icon-minus.svg";
import cartImage from "./src/images/icon-cart.svg";
import img1Thumbnail from "./src/images/image-product-1-thumbnail.jpg";
import img2Thumbnail from "./src/images/image-product-2-thumbnail.jpg";
import img3Thumbnail from "./src/images/image-product-3-thumbnail.jpg";
import img4Thumbnail from "./src/images/image-product-4-thumbnail.jpg";

function Header(props) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className="header">
        <img src={logo} />

        <ul className="header_Options">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <img
          className="open-CartImg"
          style={{ cursor: "pointer" }}
          src={ImageCart}
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        />
        <img
          className="user-Image"
          style={{ height: "50px", cursor: "pointer" }}
          src={UserImage}
        />
      </div>

      {isVisible ? (
        <div className="cart" style={{ display: "flex" }}>
          <div className="product_Discription">
            <img className="cartImg" style={{ height: "40px" }} src={shoeImg} />
            <h3>Fall limited edition sneakers</h3>
          </div>
          <div className="cart_Value">
            {props.isActive ? (
              <h3>
                $ 125 * {props.currentValue} = {125 * props.currentValue}
              </h3>
            ) : (
              <h3>your cart is empty</h3>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

function Body(props) {
  const [mainImage, setMainImage] = useState(MainImage);

  function ItemPlus() {
    props.setcurrentValue(props.currentValue + 1);
  }

  function ItemMinus() {
    props.setcurrentValue(props.currentValue - 1);
  }

  return (
    <div className="body-area">
      <div className="cart_Area">
        <div className="cart_Section">
          <div className="image_Section">
            <img src={mainImage} />
          </div>

          <div className="thumbnail_images">
            <img src={img1Thumbnail} onClick={() => setMainImage(MainImage)} />
            <img src={img2Thumbnail} onClick={() => setMainImage(MainImage1)} />
            <img src={img3Thumbnail} onClick={() => setMainImage(MainImage2)} />
            <img src={img4Thumbnail} onClick={() => setMainImage(MainImage3)} />
          </div>
        </div>

        <div className="product_info">
          <h3>Sneaker Company</h3>
          <h2>Fall Limited Edition Sneakers</h2>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <h1>50% off</h1>

          <div className="addtoCart">
            <div className="allBtns">
              <button className="minus" onClick={ItemMinus}>
                <img src={minus} />
              </button>
              <h4>{props.currentValue}</h4>
              <button className="plus" onClick={ItemPlus}>
                <img src={plus} />
              </button>
            </div>
            <button
              className="addtoCartBtn"
              onClick={() => props.setIsactive(!props.isActive)}
            >
              <img src={cartImage} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [currentValue, setcurrentValue] = useState(0);
  const [isActive, setIsactive] = useState(false);

  return (
    <div>
      <Header
        currentValue={currentValue}
        isActive={isActive}
        MainImage1={MainImage1}
      />
      <Body
        currentValue={currentValue}
        setcurrentValue={setcurrentValue}
        isActive={isActive}
        setIsactive={setIsactive}
        MainImage1={MainImage1}
      />
    </div>
  );
}

const root = document.getElementById("root");
const rootElement = React.createElement(App);
const rootContainer = ReactDOM.createRoot(root);
rootContainer.render(rootElement);
